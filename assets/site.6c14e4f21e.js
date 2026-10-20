(()=>{"use strict";document.body.classList.add("motion-ready");const e="",t="",o="",a="",n="",r="",s="5561996320022",i=(e,t=document)=>t.querySelector(e),c=(e,t=document)=>[...t.querySelectorAll(e)],l=(e,t={})=>{window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:e,...t}),"function"==typeof gtag&&gtag("event",e,t),"function"==typeof fbq&&fbq("trackCustom",e,t)};if(e){window.dataLayer=window.dataLayer||[],window.dataLayer.push({"gtm.start":Date.now(),event:"gtm.js"});const t=document.createElement("script");t.async=!0,t.src=`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(e)}`,document.head.appendChild(t)}const d=t||a;if(d){const e=document.createElement("script");e.async=!0,e.src=`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(d)}`,document.head.appendChild(e),window.dataLayer=window.dataLayer||[],window.gtag=function(){dataLayer.push(arguments)},gtag("js",new Date),t&&gtag("config",t),a&&gtag("config",a)}var p,g,m,u,y,h;o&&(p=window,g=document,m="script",p.fbq||(u=p.fbq=function(){u.callMethod?u.callMethod.apply(u,arguments):u.queue.push(arguments)},p._fbq||(p._fbq=u),u.push=u,u.loaded=!0,u.version="2.0",u.queue=[],(y=g.createElement(m)).async=!0,y.src="https://connect.facebook.net/en_US/fbevents.js",(h=g.getElementsByTagName(m)[0]).parentNode.insertBefore(y,h)),fbq("init",o),fbq("track","PageView"));const f=i("#siteHeader"),v=i("#menuButton"),w=i("#mainNav");v?.addEventListener("click",()=>{const e=w.classList.toggle("is-open");document.body.classList.toggle("menu-open",e),v.setAttribute("aria-expanded",String(e))}),c("a",w).forEach(e=>e.addEventListener("click",()=>{w.classList.remove("is-open"),document.body.classList.remove("menu-open"),v?.setAttribute("aria-expanded","false")}));c(".split-lines").forEach(e=>{if("1"===e.dataset.split)return;const t=[...e.children].filter(e=>"SPAN"===e.tagName);if(t.length)t.forEach(e=>{e.classList.add("line-wrap");const t=document.createElement("span");t.className="line-inner",t.innerHTML=e.innerHTML,e.innerHTML="",e.appendChild(t)});else{const t=e.innerHTML.trim();e.innerHTML=`<span class="line-wrap"><span class="line-inner">${t}</span></span>`}e.dataset.split="1"});const b=i(".hero-v9"),T=()=>matchMedia("(max-width:980px)").matches?i(".hero-mobile-v9"):i(".hero-desktop-v9"),L=()=>i(".hero-art-wrap",T()),E=()=>i(".hero-form-wrap",T()),x=i(".hero-desktop-v9 .hero-pointer-light");b&&matchMedia("(pointer:fine)").matches&&(b.addEventListener("pointermove",e=>{if(matchMedia("(max-width:980px)").matches)return;const t=b.getBoundingClientRect(),o=(e.clientX-t.left)/t.width-.5,a=(e.clientY-t.top)/t.height-.5;if(x&&(x.style.setProperty("--pointer-x",100*(o+.5)+"%"),x.style.setProperty("--pointer-y",100*(a+.5)+"%")),window.gsap){const e=L(),t=E();e&&gsap.to(e,{x:14*o,y:10*a,rotationY:.35*o,rotationX:.22*-a,duration:.9,ease:"power3.out",overwrite:"auto"}),t&&gsap.to(t,{x:-5*o,y:-4*a,duration:1.05,ease:"power3.out",overwrite:"auto"})}}),b.addEventListener("pointerleave",()=>{if(window.gsap){const e=L(),t=E();e&&gsap.to(e,{x:0,y:0,rotationX:0,rotationY:0,duration:1.1,ease:"power3.out"}),t&&gsap.to(t,{x:0,y:0,duration:1.1,ease:"power3.out"})}}));const q=!(!window.gsap||!window.ScrollTrigger);if(q){gsap.registerPlugin(ScrollTrigger),gsap.config({nullTargetWarn:!1}),gsap.to(".scroll-progress span",{scaleX:1,ease:"none",scrollTrigger:{start:0,end:"max",scrub:.2}}),ScrollTrigger.create({start:70,onUpdate:e=>f?.classList.toggle("is-scrolled",e.scroll()>70)});T();const e=i(".hero-figma-scene",T())||i(".hero-art-img",T()),t=E();if(e&&t){gsap.set([e,t],{opacity:0}),document.documentElement.classList.remove("hero-pending");gsap.timeline({defaults:{ease:"power3.out"}}).fromTo(e,{opacity:0,scale:1.055,filter:"blur(10px)"},{opacity:1,scale:1,filter:"blur(0px)",duration:1.15},.05).fromTo(t,{opacity:0,x:0,y:0,scale:1,filter:"blur(0px)"},{opacity:1,x:0,y:0,scale:1,filter:"blur(0px)",duration:1.2},.72),ScrollTrigger.create({trigger:".hero-v9",start:"top top",end:"bottom top",scrub:1,onUpdate:t=>{const o=t.progress;gsap.set(e,{scale:1+.095*o,yPercent:7*o})}})}const o=(e,t={})=>c(e).filter(e=>!e.closest(".measure")).forEach(e=>gsap.to(e,{opacity:1,y:0,scale:1,clipPath:"inset(0% 0% 0% 0%)",duration:t.duration||1,ease:t.ease||"power3.out",scrollTrigger:{trigger:e,start:"top 86%",once:!0}}));o(".reveal-up"),o(".reveal-scale",{duration:1.1}),o(".reveal-media",{duration:1.2}),c(".split-lines").filter(e=>!e.closest(".hero")).forEach(e=>gsap.to(c(".line-inner",e),{yPercent:0,opacity:1,duration:1,stagger:.08,ease:"power3.out",scrollTrigger:{trigger:e,start:"top 86%",once:!0}})),gsap.to(".location-media img",{yPercent:12,scale:1.15,ease:"none",scrollTrigger:{trigger:".location",start:"top bottom",end:"bottom top",scrub:1}}),gsap.to(".location-seal",{y:-45,rotation:-1.5,ease:"none",scrollTrigger:{trigger:".location",start:"top bottom",end:"bottom top",scrub:1}}),gsap.to(".location-copy",{y:30,ease:"none",scrollTrigger:{trigger:".location",start:"top bottom",end:"bottom top",scrub:1}});const a=gsap.matchMedia();a.add("(min-width: 981px)",()=>{const e=i(".measure-sticky");return gsap.timeline({defaults:{ease:"none"},scrollTrigger:{id:"measure-v30",trigger:".measure",start:"top top",end:()=>`bottom top+=${e.offsetHeight}`,scrub:!0,invalidateOnRefresh:!0}}).fromTo(".measure-copy",{opacity:.18,y:24},{opacity:1,y:0,duration:.22},0).fromTo(".facade-reveal",{"--facade-cut":"100%"},{"--facade-cut":"0%",duration:.53},.22).fromTo(".measure-specs",{opacity:0,y:28},{opacity:1,y:0,duration:.25},.75),c(".split-section").forEach(e=>{gsap.fromTo(i(".split-image",e),{clipPath:"inset(8% 10%)"},{clipPath:"inset(0% 0%)",ease:"none",scrollTrigger:{trigger:e,start:"top 78%",end:"center 42%",scrub:1}}),gsap.to(i(".split-image img",e),{scale:1,yPercent:8,ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"bottom top",scrub:1}}),gsap.to(i(".split-copy",e),{y:-45,ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"bottom top",scrub:1}})}),()=>{}}),a.add("(max-width: 980px)",()=>{gsap.fromTo("#lazer .split-image",{opacity:0},{opacity:1,duration:1,scrollTrigger:{trigger:"#lazer .split-image",start:"top 90%",once:!0}}),gsap.timeline({defaults:{ease:"none"},scrollTrigger:{id:"measure-mobile-v30",trigger:".measure",start:"top 75%",end:"bottom bottom",scrub:!0}}).fromTo(".measure-copy",{opacity:.18,y:24},{opacity:1,y:0,duration:.22},0).fromTo(".facade-reveal",{"--facade-cut":"100%"},{"--facade-cut":"0%",duration:.53},.22).fromTo(".measure-specs",{opacity:0,y:28},{opacity:1,y:0,duration:.25},.75),gsap.fromTo("#arquitetura .split-image",{clipPath:"inset(8% 10%)"},{clipPath:"inset(0% 0%)",ease:"none",scrollTrigger:{trigger:"#arquitetura",start:"top 90%",end:"top 30%",scrub:!0}})});const n=i(".decision-inner p"),r=i(".decision-inner .solid-cta");n&&r&&(gsap.set(n,{autoAlpha:0,y:28}),gsap.set(r,{autoAlpha:0,y:20,scale:.97}),gsap.timeline({scrollTrigger:{trigger:".decision-band",start:"top 90%",end:"top 48%",scrub:.75}}).to(n,{autoAlpha:1,y:0,duration:.55,ease:"none"},.12).to(r,{autoAlpha:1,y:0,scale:1,duration:.34,ease:"none"},.68));const s=i(".details-copy"),l=i(".details-gallery");s&&l&&(gsap.set(s,{autoAlpha:0,y:34}),gsap.set(l,{autoAlpha:0,y:30,scale:.985}),gsap.timeline({scrollTrigger:{trigger:".details-scroll",start:"top 92%",end:"top 44%",scrub:.78}}).to(s,{autoAlpha:1,y:0,duration:.48,ease:"none"},.04).to(l,{autoAlpha:1,y:0,scale:1,duration:.46,ease:"none"},.54)),gsap.to(".closing-media img",{scale:1,yPercent:8,ease:"none",scrollTrigger:{trigger:".closing",start:"top bottom",end:"bottom top",scrub:1}}),gsap.to(".closing-copy",{y:-35,ease:"none",scrollTrigger:{trigger:".closing",start:"top bottom",end:"bottom top",scrub:1}}),c("[data-count]").forEach(e=>{const t=+e.dataset.count,o={n:0};gsap.to(o,{n:t,duration:1.4,ease:"power2.out",scrollTrigger:{trigger:e,start:"top 88%",once:!0},onUpdate:()=>e.textContent=Math.round(o.n)})})}else{c(".reveal-up,.reveal-scale,.reveal-media,.split-reveal,.line-inner").forEach(e=>{e.style.opacity=1,e.style.transform="none",e.style.clipPath="none"}),i(".facade-reveal")?.style.setProperty("--facade-cut","0%");const e=i(".measure-to");e&&(e.style.opacity="1",e.style.filter="none",e.style.transform="none");const t=i(".measure-range-connector");t&&(t.style.opacity="1")}const P=c(".faq-list details"),S=(e,t)=>{if(!e||"1"===e.dataset.animating)return;const o=i("summary",e);if(!o)return;const a=e.offsetHeight;if(e.dataset.animating="1",t){e.open=!0;const t=e.offsetHeight;e.style.height=`${o.offsetHeight}px`,e.style.overflow="hidden",requestAnimationFrame(()=>{e.style.transition="height .46s cubic-bezier(.2,.8,.2,1)",e.style.height=`${t}px`})}else e.style.height=`${a}px`,e.style.overflow="hidden",requestAnimationFrame(()=>{e.style.transition="height .42s cubic-bezier(.2,.8,.2,1)",e.style.height=`${o.offsetHeight}px`});const n=o=>{"height"===o.propertyName&&(e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition"),t||(e.open=!1),e.dataset.animating="0",e.removeEventListener("transitionend",n),q&&window.ScrollTrigger&&ScrollTrigger.refresh())};e.addEventListener("transitionend",n)};P.forEach(e=>{const t=i("summary",e);t?.addEventListener("click",t=>{t.preventDefault();const o=!e.open;P.forEach(t=>{t!==e&&t.open&&S(t,!1)}),S(e,o)})}),c(".lead-form").forEach(e=>{let t;const o=o=>{const a=e.getBoundingClientRect(),n=Math.max(0,Math.min(100,(o.clientX-a.left)/a.width*100)),r=Math.max(0,Math.min(100,(o.clientY-a.top)/a.height*100));e.style.setProperty("--glow-x",`${n}%`),e.style.setProperty("--glow-y",`${r}%`),e.classList.add("is-glowing"),clearTimeout(t),"touch"===o.pointerType&&(t=setTimeout(()=>e.classList.remove("is-glowing"),520))};e.addEventListener("pointermove",o,{passive:!0}),e.addEventListener("pointerdown",o,{passive:!0}),e.addEventListener("pointerleave",()=>{matchMedia("(hover:hover)").matches&&e.classList.remove("is-glowing")},{passive:!0})}),c(".track-cta").forEach(e=>e.addEventListener("click",()=>l(e.dataset.event||"cta_click",{location:e.closest("section,header,footer")?.id||"page"})));let A=!1;addEventListener("scroll",()=>{!A&&(scrollY+innerHeight)/document.documentElement.scrollHeight>=.5&&(A=!0,l("scroll_50"))},{passive:!0});// --- INTEGRAÇÃO PADRONIZADA HYPNOBOX EMPLAVI ---

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

const formatPhoneMask = (val) => {
  let d = (val || "").replace(/\D/g, "");
  if (d.startsWith("55") && d.length > 11) {
    d = d.slice(2);
  }
  if (d.startsWith("0") && d.length >= 12) {
    d = d.replace(/^0+/, "");
  }
  d = d.slice(0, 11);
  if (!d) return "";
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7, 11)}`;
};

const validatePhone = (raw) => {
  let d = (raw || "").replace(/\D/g, "");
  if (d.startsWith("55") && d.length > 11) {
    d = d.slice(2);
  }
  if (d.startsWith("0") && d.length >= 12) {
    d = d.replace(/^0+/, "");
  }
  if (!d) {
    return { valid: false, message: "Por favor, informe seu WhatsApp com DDD." };
  }
  if (d.length === 10) {
    return { valid: false, message: "Este formulário é exclusivo para WhatsApp. Por favor, informe seu celular com o dígito 9 após o DDD (ex: (61) 99999-9999)." };
  }
  if (d.length < 11) {
    return { valid: false, message: "Número incompleto. Informe seu WhatsApp com DDD e 9 dígitos (ex: (61) 99999-9999)." };
  }
  if (d.length > 11) {
    return { valid: false, message: "Número com dígitos em excesso. Informe os 11 dígitos do WhatsApp com DDD." };
  }

  const ddd = d.slice(0, 2);
  if (!VALID_DDDS.includes(ddd)) {
    return { valid: false, message: `DDD (${ddd}) inválido. Informe um DDD brasileiro válido.` };
  }

  const nonoDigito = d.charAt(2);
  if (nonoDigito !== "9") {
    return { valid: false, message: "O WhatsApp deve iniciar obrigatoriamente com o dígito 9 após o DDD (ex: (61) 9XXXX-XXXX)." };
  }

  const quartoDigito = d.charAt(3);
  if (quartoDigito === "0" || quartoDigito === "1") {
    return { valid: false, message: "Prefixo de celular inválido. No Brasil, o número após o 9 não inicia com 0 ou 1." };
  }

  // Bloqueio de repetições monótonas totais (ex: 11111111111, 99999999999)
  if (/^(\d)\1{10}$/.test(d)) {
    return { valid: false, message: "Por favor, informe um número de WhatsApp válido." };
  }

  const numero = d.slice(2);

  // Bloqueio de sufixos com todos dígitos repetidos após o 9 (ex: 99999-9999, 98888-8888, 90000-0000)
  if (/^9(\d)\1{7}$/.test(numero)) {
    return { valid: false, message: "Por favor, informe um número de WhatsApp real." };
  }

  // Bloqueio de sequências lineares e espelhamento óbvio (ex: 12345678901, 91234-5678, 98765-4321)
  const padroesFalsos = [
    "12345678901",
    "98765432109",
    "01234567890",
    "912345678",
    "987654321",
    "912121212",
    "901010101",
    "989898989"
  ];
  if (padroesFalsos.includes(d) || padroesFalsos.includes(numero)) {
    return { valid: false, message: "Por favor, informe um número de WhatsApp válido." };
  }

  const formatted = `(${ddd}) ${d.slice(2, 7)}-${d.slice(7, 11)}`;
  return {
    valid: true,
    ddd: ddd,
    telefone: numero,
    formatted: formatted,
    isMobile: true,
    rawDigits: d
  };
};

document.querySelectorAll('input[type="tel"], input[name*="phone"]').forEach(inp => {
  const handleInput = () => {
    inp.value = formatPhoneMask(inp.value);
    inp.setCustomValidity("");
    inp.classList.remove("is-invalid");
    const form = inp.closest("form");
    const statusEl = form ? form.querySelector(".form-status") : null;
    if (statusEl && statusEl.classList.contains("is-error")) {
      statusEl.textContent = "";
      statusEl.classList.remove("is-error");
    }
  };

  inp.addEventListener("input", handleInput);
  inp.addEventListener("paste", () => {
    setTimeout(handleInput, 0);
  });

  inp.addEventListener("blur", () => {
    if (!inp.value.trim()) {
      inp.classList.remove("is-invalid");
      inp.setCustomValidity("");
      return;
    }
    const res = validatePhone(inp.value);
    if (!res.valid) {
      inp.classList.add("is-invalid");
      inp.setCustomValidity(res.message);
    } else {
      inp.classList.remove("is-invalid");
      inp.setCustomValidity("");
      inp.value = res.formatted;
    }
  });
});



// Sincronização automática e persistência de parâmetros UTM nos formulários

const syncUtmParams = () => {

  try {

    const p = new URLSearchParams(window.location.search);

    const hasUtm = p.has('utm_source') || p.has('utm_campaign') || p.has('utm_medium') || p.has('source') || p.has('campaign');

    const getP = (k, alt) => p.get(k) || (alt ? p.get(alt) : '') || '';

    const src = getP('utm_source', 'source');

    const cmp = getP('utm_campaign', 'campaign') || getP('utm_name', 'campaign_name');

    const med = getP('utm_medium', 'medium');

    const trm = getP('utm_term', 'term');

    const cnt = getP('utm_content', 'content');



    if (hasUtm && window.sessionStorage) {

      if (src) window.sessionStorage.setItem('emplavi_utm_source', src); else window.sessionStorage.removeItem('emplavi_utm_source');

      if (cmp) window.sessionStorage.setItem('emplavi_utm_campaign', cmp); else window.sessionStorage.removeItem('emplavi_utm_campaign');

      if (med) window.sessionStorage.setItem('emplavi_utm_medium', med); else window.sessionStorage.removeItem('emplavi_utm_medium');

      if (trm) window.sessionStorage.setItem('emplavi_utm_term', trm); else window.sessionStorage.removeItem('emplavi_utm_term');

      if (cnt) window.sessionStorage.setItem('emplavi_utm_content', cnt); else window.sessionStorage.removeItem('emplavi_utm_content');

    }



    const effSrc = src || (window.sessionStorage ? window.sessionStorage.getItem('emplavi_utm_source') || '' : '');

    const effCmp = cmp || (window.sessionStorage ? window.sessionStorage.getItem('emplavi_utm_campaign') || '' : '');

    const effMed = med || (window.sessionStorage ? window.sessionStorage.getItem('emplavi_utm_medium') || '' : '');

    const effTrm = trm || (window.sessionStorage ? window.sessionStorage.getItem('emplavi_utm_term') || '' : '');

    const effCnt = cnt || (window.sessionStorage ? window.sessionStorage.getItem('emplavi_utm_content') || '' : '');



    const effMidia = (effSrc && effCmp)

      ? `${effSrc} - ${effCmp}`

      : (effSrc || (effCmp ? `LP Residencial Agata - ${effCmp}` : 'LP Residencial Agata'));



    document.querySelectorAll('.lead-form').forEach(f => {

      const setH = (n, v) => {

        let el = f.querySelector(`input[name="${n}"]`);

        if (!el) {

          el = document.createElement('input');

          el.type = 'hidden';

          el.name = n;

          f.appendChild(el);

        }

        el.value = v;

      };

      setH('midia', effMidia);

      setH('utm_source', effMidia);

      setH('utm_campaign', effCmp);

      setH('utm_medium', effMed);

      setH('utm_term', effTrm);

      setH('utm_content', effCnt);

    });

  } catch (e) {}

};

syncUtmParams();

if (document.readyState === 'loading') {

  document.addEventListener('DOMContentLoaded', syncUtmParams);

}



c(".lead-form").forEach(formEl => formEl.addEventListener("submit", evt => {

  evt.preventDefault();

  (async form => {
    // Evita lead duplicado por clique duplo enquanto o envio está em andamento.
    if (form.dataset.sending === "1") return;
    const statusEl = i(".form-status", form);
    const phoneInput = form.querySelector('input[type="tel"], input[name*="phone"]');
    const formData = new FormData(form);
    const entries = Object.fromEntries(formData.entries());

    const nome = entries["form_fields[nome]"] || entries.nome || entries.name || "";
    const email = entries["form_fields[email]"] || entries.email || "";
    const telefoneRaw = entries["form_fields[phone]"] || entries.phone || (phoneInput ? phoneInput.value : "");
    const moraSudoeste = entries["form_fields[mora_sudoeste]"] || entries.mora_sudoeste || "";
    
    // idProduto configurável (usa window.EMPLAVI_CONFIG se disponível, ou o hidden field, ou padrão 18)
    const idProduto = (window.EMPLAVI_CONFIG && window.EMPLAVI_CONFIG.idProduto)
      || entries["form_fields[idproduto]"]
      || (window.hypnobox && window.hypnobox.idProduto)
      || "18";
      
    const tituloPagina = (window.EMPLAVI_CONFIG && window.EMPLAVI_CONFIG.tituloPagina)
      || entries["form_fields[field_titulo_pagina]"]
      || "Residencial Ágata";

    if (!nome.trim() || !email.trim()) {
      if (statusEl) {
        statusEl.textContent = "Nome e e-mail são obrigatórios.";
        statusEl.classList.add("is-error");
      }
      form.reportValidity();
      return;
    }

    const phoneRes = validatePhone(telefoneRaw);
    if (!phoneRes.valid) {
      if (phoneInput) {
        phoneInput.classList.add("is-invalid");
        phoneInput.setCustomValidity(phoneRes.message);
        if (typeof phoneInput.reportValidity === "function") {
          phoneInput.reportValidity();
        }
        phoneInput.focus();
      }
      if (statusEl) {
        statusEl.textContent = phoneRes.message;
        statusEl.classList.add("is-error");
      }
      return;
    }

    if (phoneInput) {
      phoneInput.classList.remove("is-invalid");
      phoneInput.setCustomValidity("");
      phoneInput.value = phoneRes.formatted;
    }
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (statusEl) {
      statusEl.classList.remove("is-error");
    }

    const ddd = phoneRes.ddd;
    const telefone = phoneRes.telefone;
    const telefoneFormatado = phoneRes.formatted;



    const urlParams = new URLSearchParams(window.location.search);

    if (statusEl) statusEl.textContent = "Enviando cadastro para o atendimento...";



    // Captura e normalização robusta de UTMs (URL params -> sessionStorage -> campos do form)

    const getParam = (k, alt) => {

      let v = urlParams.get(k) || (alt ? urlParams.get(alt) : "") || "";

      if (!v && window.sessionStorage) {

        try { v = window.sessionStorage.getItem("emplavi_" + k) || ""; } catch(e) {}

      }

      if (!v && entries[k]) v = entries[k];

      return v ? v.trim() : "";

    };



    const utmSource = getParam("utm_source", "source");

    const utmCampaign = getParam("utm_campaign", "campaign") || getParam("utm_name", "campaign_name");

    const utmMedium = getParam("utm_medium", "medium");

    const utmTerm = getParam("utm_term", "term");

    const utmContent = getParam("utm_content", "content");



    // Persistência em sessionStorage para preservar dados durante a navegação

    try {

      const hasUtmInUrl = urlParams.has("utm_source") || urlParams.has("utm_campaign") || urlParams.has("utm_medium") || urlParams.has("source") || urlParams.has("campaign");

      if (hasUtmInUrl && window.sessionStorage) {

        if (utmSource) window.sessionStorage.setItem("emplavi_utm_source", utmSource); else window.sessionStorage.removeItem("emplavi_utm_source");

        if (utmCampaign) window.sessionStorage.setItem("emplavi_utm_campaign", utmCampaign); else window.sessionStorage.removeItem("emplavi_utm_campaign");

        if (utmMedium) window.sessionStorage.setItem("emplavi_utm_medium", utmMedium); else window.sessionStorage.removeItem("emplavi_utm_medium");

        if (utmTerm) window.sessionStorage.setItem("emplavi_utm_term", utmTerm); else window.sessionStorage.removeItem("emplavi_utm_term");

        if (utmContent) window.sessionStorage.setItem("emplavi_utm_content", utmContent); else window.sessionStorage.removeItem("emplavi_utm_content");

      }

    } catch (e) {}



    // Formatação de mídia exigida pelo cliente: [source] - [campaign name]

    let midiaFinal = "LP Residencial Agata";

    if (utmSource && utmCampaign) {

      midiaFinal = `${utmSource} - ${utmCampaign}`;

    } else if (utmSource) {

      midiaFinal = utmSource;

    } else if (utmCampaign) {

      midiaFinal = `LP Residencial Agata - ${utmCampaign}`;

    }



    // Rota AJAX padrão da Emplavi

    const hypnoboxUrl = (window.hypnobox && window.hypnobox.ajaxUrl)

      || (window.location.hostname.includes("emplavi.com.br") ? "/wp-admin/admin-ajax.php" : "https://emplavi.com.br/wp-admin/admin-ajax.php");



    const payload = new URLSearchParams({

      action: "hypnobox_send",

      nome: nome,

      email: email,

      ddd: ddd,

      telefone: telefone,

      idProduto: idProduto,

      tipoApartamento: "2 Quartos (76 a 89m²)",

      bairro: "SQSW 500 - Sudoeste",

      jaPossuiImovel: moraSudoeste,

      interesseEm: "Residencial Ágata - Lançamento SQSW 500",

      mensagem: `Solicitação via LP Residencial Ágata (SQSW 500). Telefone/WhatsApp: ${telefoneFormatado}. Já é morador do Sudoeste: ${moraSudoeste || "Não informado"}. Formulário: ${form.id || "Principal"}. Mídia: ${midiaFinal}`,
      midia: midiaFinal,
      midia_origem: midiaFinal,
      utm_source: midiaFinal, // Hypnobox.php mapeia $_POST['utm_source'] diretamente para a 'midia' do CRM
      utm_campaign: utmCampaign,
      utm_medium: utmMedium,
      utm_term: utmTerm,
      utm_content: utmContent
    });

    // Prévias fora de emplavi.com.br (GitHub Pages, localhost) não enviam lead real ao Hypnobox nem ao RD.
    if (!/(^|\.)emplavi\.com\.br$/.test(window.location.hostname)) {
      console.info("Prévia fora de emplavi.com.br: lead NÃO enviado. Payload Hypnobox:", Object.fromEntries(payload));
      if (statusEl) {
        statusEl.textContent = "Prévia: cadastro validado, mas não enviado ao CRM (só envia em emplavi.com.br).";
        statusEl.classList.remove("is-error");
      }
      form.reset();
      return;
    }

    form.dataset.sending = "1";
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    try {
      // Disparo para a integração Hypnobox. keepalive + espera antes do redirecionamento
      // para a navegação não cancelar a requisição (lead perdido).
      const hypnoboxSend = fetch(hypnoboxUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
        credentials: "same-origin",
        keepalive: true
      }).then(res => {
        if (!res.ok) console.warn("Hypnobox response status:", res.status);
      }).catch(err => {
        console.warn("Hypnobox async send notice:", err);
      });

      // Disparo dataLayer compatível com GA4, GTM e tags RD Station
      l("lead_submit", {
        form_name: form.id || "Residencial Ágata",
        lead_name: nome,
        lead_email: email,
        lead_phone: telefoneFormatado,
        empreendimento: tituloPagina,
        id_produto: idProduto,
        midia: midiaFinal,
        utm_source: utmSource,
        utm_campaign: utmCampaign,
        utm_medium: utmMedium,
        utm_term: utmTerm,
        utm_content: utmContent,
        token_rdstation: (window.EMPLAVI_CONFIG && window.EMPLAVI_CONFIG.tokenRdStation) || "33a69fee1f007e4a6a3a673585ba91a8",
        conversion_identifier: (window.EMPLAVI_CONFIG && window.EMPLAVI_CONFIG.identificadorRd) || "conversao-lp-residencial-agata"
      });

      // Disparo direto RD Station
      try {
        const tokenRd = (window.EMPLAVI_CONFIG && window.EMPLAVI_CONFIG.tokenRdStation) || "33a69fee1f007e4a6a3a673585ba91a8";
        const identificadorRd = (window.EMPLAVI_CONFIG && window.EMPLAVI_CONFIG.identificadorRd) || "conversao-lp-residencial-agata";
        const rdLeadData = [
          { name: "token_rdstation", value: tokenRd },
          { name: "identificador", value: identificadorRd },
          { name: "nome", value: nome },
          { name: "name", value: nome },
          { name: "email", value: email },
          { name: "telefone", value: telefoneFormatado },
          { name: "mobile_phone", value: telefoneFormatado },
          { name: "personal_phone", value: telefoneFormatado },
          { name: "mora_sudoeste", value: moraSudoeste || "Não informado" },
          { name: "id_produto", value: idProduto },
          { name: "empreendimento", value: tituloPagina },
          { name: "traffic_source", value: midiaFinal },
          { name: "utm_source", value: utmSource || midiaFinal },
          { name: "utm_campaign", value: utmCampaign },
          { name: "utm_medium", value: utmMedium },
          { name: "utm_term", value: utmTerm },
          { name: "utm_content", value: utmContent },
          { name: "midia", value: midiaFinal }
        ];

        if (typeof window.sendEmplaviRDLead === "function") {
          window.sendEmplaviRDLead(rdLeadData);
        } else if (window.RdstationFormsIntegration && window.RdstationFormsIntegration.Integration && typeof window.RdstationFormsIntegration.Integration.post === "function") {
          window.RdstationFormsIntegration.Integration.post(rdLeadData);
        } else if (window.RdIntegration && typeof window.RdIntegration.post === "function") {
          window.RdIntegration.post(rdLeadData);
        }
      } catch (rdErr) {
        console.warn("RD Station post notice:", rdErr);
      }

      if (typeof fbq === "function") fbq("track", "Lead");
      if (a && n && typeof gtag === "function") gtag("event", "conversion", { send_to: `${a}/${n}` });

      const defaultObrigado = "/obrigado-residencial-agata/";
      const configUrl = (window.EMPLAVI_CONFIG && window.EMPLAVI_CONFIG.urlObrigado) || defaultObrigado;
      const searchParams = window.location.search || "";
      const targetObrigadoUrl = configUrl + (configUrl.includes("?") ? (searchParams ? "&" + searchParams.slice(1) : "") : searchParams);

      if (statusEl) {
        statusEl.textContent = "Cadastro recebido com sucesso! Redirecionando...";
        statusEl.classList.remove("is-error");
      }

      // Fechar o balão nativo antes de limpar os campos após o envio válido.
      form.querySelector('button[type="submit"]')?.focus({ preventScroll: true });
      form.reset();

      // Só sai da página depois da resposta do Hypnobox (máx. 8 s) e com folga para o RD Station.
      await Promise.all([
        Promise.race([hypnoboxSend, new Promise(r => setTimeout(r, 8000))]),
        new Promise(r => setTimeout(r, 400))
      ]);
      window.location.href = targetObrigadoUrl;
    } catch (err) {
      console.error("Erro no processamento:", err);
      const defaultObrigado = "/obrigado-residencial-agata/";
      const configUrl = (window.EMPLAVI_CONFIG && window.EMPLAVI_CONFIG.urlObrigado) || defaultObrigado;
      const searchParams = window.location.search || "";
      const targetObrigadoUrl = configUrl + (configUrl.includes("?") ? (searchParams ? "&" + searchParams.slice(1) : "") : searchParams);

      if (statusEl) {
        statusEl.textContent = "Cadastro recebido! Redirecionando...";
        statusEl.classList.remove("is-error");
      }
      setTimeout(() => {
        window.location.href = targetObrigadoUrl;
      }, 400);
    }

  })(formEl);

}))})(),(()=>{const e=matchMedia("(prefers-reduced-motion: reduce)").matches,t=document.querySelector(".closing"),o=document.querySelector(".closing-pointer-light");if(t&&o&&!e&&matchMedia("(pointer:fine)").matches){let e=0,a=40,n=48;t.addEventListener("pointermove",r=>{const s=t.getBoundingClientRect();a=(r.clientX-s.left)/s.width*100,n=(r.clientY-s.top)/s.height*100,e||(e=requestAnimationFrame(()=>{o.style.setProperty("--closing-x",a+"%"),o.style.setProperty("--closing-y",n+"%"),e=0}))},{passive:!0})}if(e||!window.gsap||!window.ScrollTrigger)return;const a=(e,t,o=.13,a=22)=>{const n=Array.from(document.querySelectorAll(e));n.length&&(gsap.fromTo(n,{opacity:0,y:a},{opacity:1,y:0,duration:.85,stagger:o,ease:"power2.out",scrollTrigger:{trigger:t||n[0],start:"top 91%",once:!0}}),n.forEach(e=>e.addEventListener("focusin",()=>{gsap.killTweensOf(e),gsap.set(e,{opacity:1,y:0})})))};a("#convenience-title > *","#convenience-title",.18),a(".convenience-copy-panel > *",".convenience-copy-panel",.16),a(".convenience .conv-card",".convenience-stage",.13,0),a("#faq-title","#faq-title"),document.querySelectorAll(".faq-list details").forEach(e=>{gsap.fromTo(e,{opacity:0,y:22},{opacity:1,y:0,duration:.7,ease:"power2.out",scrollTrigger:{trigger:e,start:"top 91%",once:!0}}),e.addEventListener("focusin",()=>{gsap.killTweensOf(e),gsap.set(e,{opacity:1,y:0})})}),a("#closing-title > *","#closing-title",.22),a(".closing-copy > p",".closing-copy > p"),a("#leadFormBottom","#leadFormBottom",0,0),a("#leadFormBottom > .v9-form-head,#leadFormBottom > .v9-form-summary,#leadFormBottom > .v9-form-note","#leadFormBottom",.19),a("#leadFormBottom .v9-fields > label","#leadFormBottom .v9-fields",.13),a("#leadFormBottom > button","#leadFormBottom > button"),a("#proof-title","#proof-title"),a(".footer-grid > div",".footer-grid",.12);const n=()=>ScrollTrigger.refresh();"complete"===document.readyState?n():addEventListener("load",n,{once:!0}),document.fonts?.ready.then(n)})(),(()=>{const e=document.querySelector(".details-scroll"),t=e.querySelector(".details-sticky"),o=[...e.querySelectorAll(".detail-shot")],a=document.querySelector("#convenienceScroll"),n=document.querySelector("#convenienceRail"),r=a.querySelector(".convenience-stage"),s=matchMedia("(prefers-reduced-motion:reduce)"),i=e=>Math.max(0,Math.min(1,e));let c=0,l=-1;const d=()=>{if(c=0,s.matches)return;const d=innerWidth<=980?20:Math.max(110,Math.min(220,.105*innerWidth)),p=n.querySelector(".conv-card:last-of-type"),g=Math.max(0,p.offsetLeft+p.offsetWidth-(innerWidth-d)),m=Math.max(1,g-Math.min(180,.2*innerHeight)),u=r.offsetHeight+m+"px";a.style.height!==u&&(a.style.height=u),a.style.setProperty("--mobile-rail-height",u);const y=i(-a.getBoundingClientRect().top/m);n.style.setProperty("--rail-x",-g*y+"px");const h=i(-e.getBoundingClientRect().top/Math.max(1,e.offsetHeight-t.offsetHeight)),f=Math.min(o.length-1,Math.floor(h*o.length));f!==l&&(o.forEach((e,t)=>{e.style.setProperty("--photo-opacity",t===f?"1":"0"),e.style.setProperty("--photo-scale",t===f?"1":"1.025"),e.classList.toggle("is-active",t===f)}),l=f);const v=e.querySelector(".detail-index b");v&&(v.textContent=String(f+1).padStart(2,"0")),e.querySelector(".detail-index span")?.style.setProperty("--detail-progress",h)},p=()=>{c||(c=requestAnimationFrame(d))};addEventListener("scroll",p,{passive:!0}),addEventListener("resize",p,{passive:!0}),addEventListener("load",p,{once:!0}),document.fonts?.ready.then(p),s.addEventListener("change",p);const g=new ResizeObserver(p);g.observe(document.body),g.observe(t),g.observe(r),d()})(),(()=>{const e=document.getElementById("menuButton"),t=document.getElementById("mainNav");function o(){t.classList.remove("is-open"),document.body.classList.remove("menu-open"),e.setAttribute("aria-expanded","false")}document.addEventListener("keydown",a=>{"Escape"===a.key&&t.classList.contains("is-open")&&(o(),e.focus())}),matchMedia("(max-width:980px)").addEventListener("change",o)})();
