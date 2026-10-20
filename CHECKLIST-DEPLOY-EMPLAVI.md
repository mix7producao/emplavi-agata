# Checklist: subir uma LP no site da Emplavi

Toda LP publicada em `emplavi.com.br/<pasta>/` precisa entregar o lead ao **Hypnobox** (CRM da Emplavi) e ao **RD Station**. Confira tudo abaixo **antes e depois** de cada envio ao servidor.

## Como funciona

```
Formulário da LP  ──POST──▶  /wp-admin/admin-ajax.php  (action=hypnobox_send)
                               │  plugin WordPress "SITE-EMPLAVI" (Hypnobox.php)
                               ▼
                             Hypnobox (CRM)  ── idProduto define o empreendimento
Formulário da LP  ──JS────▶  RD Station (token público + identificador da conversão)
                  ──JS────▶  GTM (GTM-WTZL5XF), evento "lead_submit"
Depois do envio   ─────────▶ /obrigado-<empreendimento>/   (página de obrigado no WordPress)
```

- O envio ao Hypnobox **só funciona dentro de emplavi.com.br** (mesmo domínio do WordPress). Fora dele (GitHub Pages, localhost), o `assets/emplavi-leads.js` só valida o formulário e não manda nada. Isso é de propósito, para prévias não criarem leads falsos.
- Código: `assets/emplavi-leads.js` (envio) e `window.EMPLAVI_CONFIG` no `<head>` do `index.html` (dados da LP).

## 1. Não mude os campos do Hypnobox

O `Hypnobox.php` lê exatamente estes nomes. **Nunca renomeie, remova ou troque o formato:**

| Campo enviado | Conteúdo |
|---|---|
| `action` | sempre `hypnobox_send` |
| `nome`, `email` | do formulário |
| `ddd` | 2 dígitos (ex.: `61`) |
| `telefone` | 9 dígitos, sem DDD (ex.: `981234567`) |
| `idProduto` | ID do empreendimento no Hypnobox (Ágata = `148`) |
| `tipoApartamento`, `bairro`, `interesseEm` | texto fixo da LP (vem do `EMPLAVI_CONFIG`) |
| `jaPossuiImovel` | resposta de "Já é morador do Sudoeste?" |
| `mensagem` | resumo com telefone, morador, id do formulário e mídia |
| `midia`, `midia_origem`, `utm_source` | `"[source] - [campaign]"` (o `utm_source` vira a mídia no CRM) |
| `utm_campaign`, `utm_medium`, `utm_term`, `utm_content` | da URL (guardados no sessionStorage) |

No HTML, os campos visíveis se chamam `form_fields[nome]`, `form_fields[email]`, `form_fields[phone]` e `form_fields[mora_sudoeste]`, e os 3 formulários têm os mesmos campos ocultos (`action`, `form_fields[idproduto]`, `form_fields[idformulario]`, `form_fields[field_titulo_pagina]`, `form_fields[tipoapartamento]`, `identificador`, `token_rdstation`).

## 2. Antes de subir (conferir no código)

- [ ] `EMPLAVI_CONFIG.idProduto` e `idFormulario` com o ID **definitivo** do empreendimento (pedir à Emplavi; nunca deixar o provisório).
- [ ] O mesmo ID nos campos ocultos `form_fields[idproduto]` / `form_fields[idformulario]` dos **3 formulários**.
- [ ] `identificadorRd` (conversão no RD) e `urlObrigado` com o nome do empreendimento certo, e a página de obrigado existe no WordPress.
- [ ] `tituloPagina`, `tipoApartamento`, `bairro`, `interesseEm`, `midiaPadrao`, `mensagemOrigem` revisados.
- [ ] `index.html` carrega `assets/emplavi-leads.js` e **não** existe outro handler de submit (o template antigo abria o WhatsApp sem mandar o lead ao CRM).
- [ ] Ao trocar JS/CSS, mudar o `?v=AAAAMMDD` dos links para furar o cache.
- [ ] Teste na prévia (GitHub Pages): preencher e enviar. Deve aparecer "Prévia: cadastro validado…" e o console mostra o payload com os campos da tabela acima.
- [ ] `canonical`, `og:url` e `og:image` apontando para `https://emplavi.com.br/<pasta>/`.

## 3. Subir

- Destino: servidor da Emplavi via **SFTP** (não FTP), pasta `<raiz do WordPress>/<pasta-da-lp>/`.
- Enviar `index.html`, `favicon.ico` e a pasta `assets/` inteira. **Não** enviar PDFs, `.git`, `.claude`, `LEIA-ME`, este checklist.
- Antes de sobrescrever, baixar uma cópia da versão no ar (rollback).
- Se houver cache (servidor/plugin/CDN), limpar depois.

## 4. Depois de subir (teste real, obrigatório)

- [ ] Abrir `https://emplavi.com.br/<pasta>/?utm_source=teste&utm_campaign=deploy` em aba anônima.
- [ ] DevTools > Network: enviar 1 lead de teste (nome "TESTE DEPLOY - apagar"). O POST para `admin-ajax.php` deve voltar **200** com `{"success":true}`.
- [ ] Foi redirecionado para a página de obrigado.
- [ ] O lead apareceu no **Hypnobox** no empreendimento certo, com mídia `teste - deploy`.
- [ ] O lead apareceu no **RD Station** com a conversão certa.
- [ ] Avisar a Emplavi para descartar o lead de teste.
