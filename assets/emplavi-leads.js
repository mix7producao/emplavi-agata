// Integração de leads Emplavi: Hypnobox (via plugin SITE-EMPLAVI no WordPress) + RD Station + GTM.
// Configuração por LP em window.EMPLAVI_CONFIG (index.html). Ver CHECKLIST-DEPLOY-EMPLAVI.md.
(() => {
  "use strict";

  const cfg = () => window.EMPLAVI_CONFIG || {};
  // Só envia para CRM/RD no domínio da Emplavi; prévias (GitHub Pages, localhost) não geram leads reais.
  const isLive = () => cfg().forceLive === true || /(^|\.)emplavi\.com\.br$/.test(location.hostname);

  const track = (event, data = {}) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...data });
  };

  // --- Telefone (WhatsApp) ---
  const VALID_DDDS = [
    "11", "12", "13", "14", "15", "16", "17", "18", "19",
    "21", "22", "24", "27", "28",
    "31", "32", "33", "34", "35", "37", "38",
    "41", "42", "43", "44", "45", "46", "47", "48", "49",
    "51", "53", "54", "55",
    "61", "62", "63", "64", "65", "66", "67", "68", "69",
    "71", "73", "74", "75", "77", "79",
    "81", "82", "83", "84", "85", "86", "87", "88", "89",
    "91", "92", "93", "94", "95", "96", "97", "98", "99"
  ];
  const FAKE_NUMBERS = ["12345678901", "98765432109", "01234567890", "912345678", "987654321", "912121212", "901010101", "989898989"];

  const digits = (val) => {
    let d = (val || "").replace(/\D/g, "");
    if (d.startsWith("55") && d.length > 11) d = d.slice(2);
    if (d.startsWith("0") && d.length >= 12) d = d.replace(/^0+/, "");
    return d;
  };

  const formatPhoneMask = (val) => {
    const d = digits(val).slice(0, 11);
    if (!d) return "";
    if (d.length <= 2) return `(${d}`;
    if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7, 11)}`;
  };

  const validatePhone = (raw) => {
    const d = digits(raw);
    if (!d) return { valid: false, message: "Por favor, informe seu WhatsApp com DDD." };
    if (d.length === 10) return { valid: false, message: "Este formulário é exclusivo para WhatsApp. Informe seu celular com o dígito 9 após o DDD (ex: (61) 99999-9999)." };
    if (d.length < 11) return { valid: false, message: "Número incompleto. Informe seu WhatsApp com DDD e 9 dígitos (ex: (61) 99999-9999)." };
    if (d.length > 11) return { valid: false, message: "Número com dígitos em excesso. Informe os 11 dígitos do WhatsApp com DDD." };
    const ddd = d.slice(0, 2);
    if (!VALID_DDDS.includes(ddd)) return { valid: false, message: `DDD (${ddd}) inválido. Informe um DDD brasileiro válido.` };
    if (d.charAt(2) !== "9") return { valid: false, message: "O WhatsApp deve iniciar com o dígito 9 após o DDD (ex: (61) 9XXXX-XXXX)." };
    if (d.charAt(3) === "0" || d.charAt(3) === "1") return { valid: false, message: "Prefixo de celular inválido. O número após o 9 não inicia com 0 ou 1." };
    const numero = d.slice(2);
    if (/^(\d)\1{10}$/.test(d) || /^9(\d)\1{7}$/.test(numero) || FAKE_NUMBERS.includes(d) || FAKE_NUMBERS.includes(numero)) {
      return { valid: false, message: "Por favor, informe um número de WhatsApp válido." };
    }
    return { valid: true, ddd, telefone: numero, formatted: `(${ddd}) ${d.slice(2, 7)}-${d.slice(7, 11)}` };
  };

  // --- UTMs: URL -> sessionStorage -> campos ocultos ---
  const UTM_KEYS = [["utm_source", "source"], ["utm_campaign", "campaign"], ["utm_medium", "medium"], ["utm_term", "term"], ["utm_content", "content"]];
  const store = {
    get: (k) => { try { return sessionStorage.getItem("emplavi_" + k) || ""; } catch (e) { return ""; } },
    set: (k, v) => { try { v ? sessionStorage.setItem("emplavi_" + k, v) : sessionStorage.removeItem("emplavi_" + k); } catch (e) {} }
  };

  const readUtms = () => {
    const p = new URLSearchParams(location.search);
    const fromUrl = {};
    UTM_KEYS.forEach(([k, alt]) => { fromUrl[k] = (p.get(k) || p.get(alt) || "").trim(); });
    if (!fromUrl.utm_campaign) fromUrl.utm_campaign = (p.get("utm_name") || p.get("campaign_name") || "").trim();
    const hasUtm = UTM_KEYS.some(([k, alt]) => p.has(k) || p.has(alt));
    if (hasUtm) UTM_KEYS.forEach(([k]) => store.set(k, fromUrl[k]));
    const utm = {};
    UTM_KEYS.forEach(([k]) => { utm[k] = fromUrl[k] || store.get(k); });
    const base = cfg().midiaPadrao || "LP Residencial Agata";
    // Formato exigido pelo cliente para a mídia no CRM: "[source] - [campaign]".
    utm.midia = utm.utm_source && utm.utm_campaign ? `${utm.utm_source} - ${utm.utm_campaign}`
      : utm.utm_source || (utm.utm_campaign ? `${base} - ${utm.utm_campaign}` : base);
    return utm;
  };

  const syncHiddenUtms = () => {
    const utm = readUtms();
    document.querySelectorAll(".lead-form").forEach((f) => {
      const setH = (n, v) => {
        let el = f.querySelector(`input[name="${n}"]`);
        if (!el) { el = document.createElement("input"); el.type = "hidden"; el.name = n; f.appendChild(el); }
        el.value = v;
      };
      setH("midia", utm.midia);
      setH("utm_source", utm.midia);
      setH("utm_campaign", utm.utm_campaign);
      setH("utm_medium", utm.utm_medium);
      setH("utm_term", utm.utm_term);
      setH("utm_content", utm.utm_content);
    });
  };

  // --- Envio ao Hypnobox ---
  // Aguarda a resposta antes de redirecionar: redirecionar com a requisição em voo pode cancelá-la e perder o lead.
  const sendHypnobox = async (payload) => {
    const url = cfg().ajaxUrl || "/wp-admin/admin-ajax.php";
    const ctrl = typeof AbortController === "function" ? new AbortController() : null;
    const timer = ctrl && setTimeout(() => ctrl.abort(), 8000);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
        body: payload.toString(),
        credentials: "same-origin",
        keepalive: true,
        signal: ctrl ? ctrl.signal : undefined
      });
      let json = null;
      try { json = await res.json(); } catch (e) {}
      const ok = res.ok && !(json && json.success === false);
      if (!ok) console.warn("Hypnobox: resposta inesperada", res.status, json);
      return { ok, status: res.status, json };
    } catch (err) {
      console.warn("Hypnobox: falha no envio", err);
      return { ok: false, error: String(err) };
    } finally {
      if (timer) clearTimeout(timer);
    }
  };

  const sendRd = (data) => {
    try {
      if (typeof window.sendEmplaviRDLead === "function") window.sendEmplaviRDLead(data);
    } catch (e) {
      console.warn("RD Station: falha no envio", e);
    }
  };

  const thankYouUrl = () => {
    const base = cfg().urlObrigado || "/obrigado-residencial-agata/";
    const qs = location.search || "";
    return base + (base.includes("?") ? (qs ? "&" + qs.slice(1) : "") : qs);
  };

  const setStatus = (form, text, isError) => {
    const el = form.querySelector(".form-status");
    if (!el) return;
    el.textContent = text;
    el.classList.toggle("is-error", !!isError);
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    if (form.dataset.sending === "1") return;

    const c = cfg();
    const phoneInput = form.querySelector('input[type="tel"]');
    const entries = Object.fromEntries(new FormData(form).entries());
    const nome = (entries["form_fields[nome]"] || "").trim();
    const email = (entries["form_fields[email]"] || "").trim();
    const moraSudoeste = entries["form_fields[mora_sudoeste]"] || "";

    if (!nome || !email) {
      setStatus(form, "Nome e e-mail são obrigatórios.", true);
      form.reportValidity();
      return;
    }
    const phone = validatePhone(entries["form_fields[phone]"] || (phoneInput && phoneInput.value));
    if (!phone.valid) {
      if (phoneInput) {
        phoneInput.classList.add("is-invalid");
        phoneInput.setCustomValidity(phone.message);
        phoneInput.reportValidity();
        phoneInput.focus();
      }
      setStatus(form, phone.message, true);
      return;
    }
    if (phoneInput) {
      phoneInput.classList.remove("is-invalid");
      phoneInput.setCustomValidity("");
      phoneInput.value = phone.formatted;
    }
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const utm = readUtms();
    const idProduto = c.idProduto || entries["form_fields[idproduto]"] || "";
    const tituloPagina = c.tituloPagina || entries["form_fields[field_titulo_pagina]"] || "Residencial Ágata";
    if (!idProduto) console.error("EMPLAVI_CONFIG.idProduto ausente: o Hypnobox não saberá qual empreendimento é.");

    // Nomes dos campos esperados pelo Hypnobox.php (plugin SITE-EMPLAVI). Não renomear.
    const payload = new URLSearchParams({
      action: "hypnobox_send",
      nome,
      email,
      ddd: phone.ddd,
      telefone: phone.telefone,
      idProduto,
      tipoApartamento: c.tipoApartamento || "",
      bairro: c.bairro || "",
      jaPossuiImovel: moraSudoeste,
      interesseEm: c.interesseEm || tituloPagina,
      mensagem: `Solicitação via ${c.mensagemOrigem || "LP " + tituloPagina}. Telefone/WhatsApp: ${phone.formatted}. Já é morador do Sudoeste: ${moraSudoeste || "Não informado"}. Formulário: ${form.id || "Principal"}. Mídia: ${utm.midia}`,
      midia: utm.midia,
      midia_origem: utm.midia,
      utm_source: utm.midia, // Hypnobox.php mapeia utm_source direto para a "mídia" do CRM
      utm_campaign: utm.utm_campaign,
      utm_medium: utm.utm_medium,
      utm_term: utm.utm_term,
      utm_content: utm.utm_content
    });

    form.dataset.sending = "1";
    const button = form.querySelector('button[type="submit"]');
    if (button) button.disabled = true;
    setStatus(form, "Enviando cadastro para o atendimento...");

    if (!isLive()) {
      console.info("Prévia fora de emplavi.com.br: lead NÃO enviado. Payload Hypnobox:", Object.fromEntries(payload));
      setStatus(form, "Prévia: cadastro validado, mas não enviado ao CRM (só envia em emplavi.com.br).");
      form.reset();
      form.dataset.sending = "0";
      if (button) button.disabled = false;
      return;
    }

    sendRd([
      { name: "token_rdstation", value: c.tokenRdStation || "" },
      { name: "identificador", value: c.identificadorRd || "" },
      { name: "nome", value: nome },
      { name: "name", value: nome },
      { name: "email", value: email },
      { name: "telefone", value: phone.formatted },
      { name: "mobile_phone", value: phone.formatted },
      { name: "personal_phone", value: phone.formatted },
      { name: "mora_sudoeste", value: moraSudoeste || "Não informado" },
      { name: "id_produto", value: idProduto },
      { name: "empreendimento", value: tituloPagina },
      { name: "traffic_source", value: utm.midia },
      { name: "utm_source", value: utm.utm_source || utm.midia },
      { name: "utm_campaign", value: utm.utm_campaign },
      { name: "utm_medium", value: utm.utm_medium },
      { name: "utm_term", value: utm.utm_term },
      { name: "utm_content", value: utm.utm_content },
      { name: "midia", value: utm.midia }
    ]);

    const result = await sendHypnobox(payload);

    track("lead_submit", {
      form_name: form.id || tituloPagina,
      lead_name: nome,
      lead_email: email,
      lead_phone: phone.formatted,
      empreendimento: tituloPagina,
      id_produto: idProduto,
      midia: utm.midia,
      utm_source: utm.utm_source,
      utm_campaign: utm.utm_campaign,
      utm_medium: utm.utm_medium,
      utm_term: utm.utm_term,
      utm_content: utm.utm_content,
      hypnobox_ok: result.ok,
      token_rdstation: c.tokenRdStation || "",
      conversion_identifier: c.identificadorRd || ""
    });
    if (typeof fbq === "function") fbq("track", "Lead");

    setStatus(form, "Cadastro recebido com sucesso! Redirecionando...");
    if (button) button.focus({ preventScroll: true });
    form.reset();
    // Dá tempo ao RD Station (assíncrono) antes de sair da página.
    setTimeout(() => { location.href = thankYouUrl(); }, 600);
  };

  const init = () => {
    document.querySelectorAll('.lead-form input[type="tel"]').forEach((inp) => {
      const onInput = () => {
        inp.value = formatPhoneMask(inp.value);
        inp.setCustomValidity("");
        inp.classList.remove("is-invalid");
        const form = inp.closest("form");
        const st = form && form.querySelector(".form-status.is-error");
        if (st) { st.textContent = ""; st.classList.remove("is-error"); }
      };
      inp.addEventListener("input", onInput);
      inp.addEventListener("paste", () => setTimeout(onInput, 0));
      inp.addEventListener("blur", () => {
        if (!inp.value.trim()) { inp.classList.remove("is-invalid"); inp.setCustomValidity(""); return; }
        const res = validatePhone(inp.value);
        inp.classList.toggle("is-invalid", !res.valid);
        inp.setCustomValidity(res.valid ? "" : res.message);
        if (res.valid) inp.value = res.formatted;
      });
    });
    document.querySelectorAll(".lead-form").forEach((f) => f.addEventListener("submit", onSubmit));
    syncHiddenUtms();
  };

  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", init) : init();
})();
