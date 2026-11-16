/* NEXUS TECH — interações locais, sem envio de dados a serviços externos. */
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
const normalizeWhatsApp = value => String(value ?? "").replace(/\D/g, "");

$("#year").textContent = new Date().getFullYear();

/* Navegação */
const menuButton = $("#menuToggle");
const nav = $("#navMenu");
function setMenu(open) {
  nav.classList.toggle("open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
}
menuButton.addEventListener("click", () => setMenu(menuButton.getAttribute("aria-expanded") !== "true"));
$$("a", nav).forEach(link => link.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") setMenu(false);
});

/* Competências */
$("#skills").innerHTML = SKILLS.map(skill => `
  <article class="skill-item">
    <span class="skill-index">${escapeHTML(skill.icon)}</span>
    <h3>${escapeHTML(skill.title)}</h3>
    <div class="tag-list">${skill.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join("")}</div>
  </article>`).join("");

/* Catálogo com filtros; imagens recebidas são referências, não evidência de uso pessoal. */
const filters = $("#gearFilters");
const gearGrid = $("#gear");
let activeFilter = "Todos";
filters.innerHTML = GEAR_CATEGORIES.map((category, index) =>
  `<button type="button" class="filter-chip" data-category="${escapeHTML(category)}" aria-pressed="${index === 0}">${escapeHTML(category)}</button>`
).join("");

function renderGear() {
  const visible = GEAR.filter(item => activeFilter === "Todos" || item.category === activeFilter);
  gearGrid.innerHTML = visible.map((item, index) => {
    const illustration = item.category === "Wi-Fi" ? "⌁" : "⟡";
    return `
    <article class="gear-card" style="--card-order:${index}">
      <figure class="gear-image">
        ${item.image
          ? `<img src="assets/reference/${escapeHTML(item.image)}" alt="${escapeHTML(item.imageAlt)}" loading="lazy" decoding="async" width="640" height="360">`
          : `<div class="tool-illustration" aria-hidden="true"><span>${illustration}</span><i></i><i></i><i></i></div>`}
        <figcaption>${escapeHTML(item.imageNote)}</figcaption>
        <span class="gear-category">${escapeHTML(item.category)}</span>
      </figure>
      <div class="gear-body">
        <p class="maker">${escapeHTML(item.maker)}</p>
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.description)}</p>
        <div class="gear-models">${item.items.map(name => `<span>${escapeHTML(name)}</span>`).join("")}</div>
        <div class="gear-details"><p><b>FUNÇÕES</b>${escapeHTML(item.functions.join(" · "))}</p><p><b>APLICAÇÕES</b>${escapeHTML(item.use)}</p></div>
      </div>
    </article>`;
  }).join("");
}
filters.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeFilter = button.dataset.category;
  $$("button", filters).forEach(chip => chip.setAttribute("aria-pressed", String(chip === button)));
  renderGear();
});
renderGear();

/* Centro acadêmico interativo: disciplinas de formação em Redes de Computadores */
const academicSearch = $("#academicSearch");
const academicFilters = $("#academicFilters");
let academicFilter = "Todos";

function buildAcademicFilters() {
  academicFilters.innerHTML = ACADEMIC_CATEGORIES.map(category => `
    <button type="button" class="academy-filter ${category === academicFilter ? "is-active" : ""}" data-area="${escapeHTML(category)}" aria-pressed="${category === academicFilter}">
      ${escapeHTML(category)}
    </button>
  `).join("");
}

function renderAcademicCards() {
  const query = academicSearch.value.trim().toLowerCase();
  const visible = ACADEMIC.filter(item => {
    const matchesArea = academicFilter === "Todos" || item.area === academicFilter;
    const haystack = [item.title, item.summary, item.whatIs, item.area, ...item.concepts, ...item.technologies].join(" ").toLowerCase();
    const matchesSearch = !query || haystack.includes(query);
    return matchesArea && matchesSearch;
  });

  $("#academic").innerHTML = visible.map(item => `
    <article class="academy-card" data-id="${escapeHTML(item.id)}">
      <button type="button" class="academy-card-toggle" data-id="${escapeHTML(item.id)}" aria-expanded="false">
        <span class="academic-top"><span class="academic-icon">${escapeHTML(item.icon)}</span><span class="academic-code">${escapeHTML(item.code)}</span></span>
        <span class="academy-card-main">
          <span class="academy-tag">${escapeHTML(item.area)}</span>
          <strong>${escapeHTML(item.title)}</strong>
          <small>${escapeHTML(item.summary)}</small>
        </span>
        <span class="academy-arrow" aria-hidden="true">+</span>
      </button>
      <div class="academy-details">
        <div class="academy-detail-grid">
          <div>
            <h5>O que é</h5>
            <p>${escapeHTML(item.whatIs)}</p>
          </div>
          <div>
            <h5>Conceitos estudados</h5>
            <ul>${item.concepts.map(concept => `<li>${escapeHTML(concept)}</li>`).join("")}</ul>
          </div>
        </div>
        <div class="academy-detail-grid">
          <div>
            <h5>Aplicação profissional</h5>
            <p>${escapeHTML(item.practice)}</p>
          </div>
          <div>
            <h5>Importância para a formação</h5>
            <p>${escapeHTML(item.professional)}</p>
          </div>
        </div>
        <div class="academy-foot">
          <div>
            <h5>Relação com a área</h5>
            <p>${escapeHTML(item.relation)}</p>
          </div>
          <div class="academy-techs">${item.technologies.map(tech => `<span>${escapeHTML(tech)}</span>`).join("")}</div>
        </div>
      </div>
    </article>`).join("") || `<div class="academy-empty">Nenhuma disciplina encontrada para os filtros atuais.</div>`;

  $$(".academy-card-toggle", $("#academic")).forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".academy-card");
      const expanded = card.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(expanded));
      button.querySelector(".academy-arrow").textContent = expanded ? "−" : "+";
    });
  });
}

buildAcademicFilters();
renderAcademicCards();

academicSearch.addEventListener("input", renderAcademicCards);
academicFilters.addEventListener("click", event => {
  const button = event.target.closest("[data-area]");
  if (!button) return;
  academicFilter = button.dataset.area;
  buildAcademicFilters();
  renderAcademicCards();
});

/* Diagramas SVG */
const stage = $("#dstage");
const tabs = $("#dtabs");
let selectedDiagram = DIAGRAMS[0];
function diagramSVG(diagram, context) {
  const nodes = {};
  diagram.nodes.split(";").forEach(raw => {
    const [id, label, x, y, kind, subtitle] = raw.split("|");
    nodes[id] = { label, x: Number(x), y: Number(y), kind, subtitle };
  });
  let edges = "";
  diagram.links.split(";").forEach(raw => {
    const [pair, style = "", label = ""] = raw.split("|");
    const [from, to] = pair.split("-");
    const a = nodes[from];
    const b = nodes[to];
    edges += `<line class="edge ${escapeHTML(style)}" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"/>`;
    if (label) edges += `<text class="edge-label" x="${(a.x + b.x) / 2}" y="${(a.y + b.y) / 2 - 7}">${escapeHTML(label)}</text>`;
  });
  const points = Object.values(nodes).map(node => `
    <g class="diagram-node node-${escapeHTML(node.kind)}">
      <rect x="${node.x - 52}" y="${node.y - 22}" width="104" height="44" rx="3"/>
      <text x="${node.x}" y="${node.y + (node.subtitle ? -2 : 5)}">${escapeHTML(node.label)}</text>
      ${node.subtitle ? `<text class="node-subtitle" x="${node.x}" y="${node.y + 13}">${escapeHTML(node.subtitle)}</text>` : ""}
    </g>`).join("");
  const titleId = `${context}-${diagram.id}-title`;
  const descriptionId = `${context}-${diagram.id}-description`;
  return `<svg viewBox="0 0 640 300" role="img" aria-labelledby="${titleId} ${descriptionId}"><title id="${titleId}">${escapeHTML(diagram.title)}</title><desc id="${descriptionId}">${escapeHTML(diagram.description)}</desc>${edges}${points}</svg>`;
}
function showDiagram(diagram) {
  selectedDiagram = diagram;
  stage.setAttribute("aria-label", diagram.title);
  stage.innerHTML = `${diagramSVG(diagram, "stage")}<p class="diagram-caption"><b>${escapeHTML(diagram.title)}.</b> ${escapeHTML(diagram.description)}</p>`;
  $$(".diagram-tab", tabs).forEach(button => button.setAttribute("aria-pressed", String(button.dataset.diagram === diagram.id)));
}
tabs.innerHTML = DIAGRAMS.map(diagram =>
  `<button type="button" class="diagram-tab" data-diagram="${escapeHTML(diagram.id)}" aria-pressed="false">${escapeHTML(diagram.title)}</button>`
).join("");
tabs.addEventListener("click", event => {
  const button = event.target.closest("[data-diagram]");
  if (button) showDiagram(DIAGRAMS.find(diagram => diagram.id === button.dataset.diagram));
});
showDiagram(DIAGRAMS[0]);

const diagramDialog = $("#diagramDialog");
$("#expandDiagram").addEventListener("click", () => {
  $("#dialogTitle").textContent = selectedDiagram.title;
  $(".dialog-body", diagramDialog).innerHTML = `${diagramSVG(selectedDiagram, "dialog")}<p>${escapeHTML(selectedDiagram.description)} <span>Diagrama conceitual de demonstração.</span></p>`;
  diagramDialog.showModal();
});
$("#closeDiagram").addEventListener("click", () => diagramDialog.close());
diagramDialog.addEventListener("click", event => {
  if (event.target === diagramDialog) diagramDialog.close();
});

/* Experiência e portfólio: nada está classificado como projeto concluído. */
$("#exp").innerHTML = EXPERIENCE.map(item => `<li>${escapeHTML(item)}</li>`).join("");
const projectType = { demo: "DEMONSTRAÇÃO TÉCNICA", study: "ESTUDO EM ANDAMENTO", real: "PROJETO REALIZADO" };
$("#proj").innerHTML = PROJECTS.map(project => `
  <article class="project-item">
    <span class="project-type type-${escapeHTML(project.type)}">${projectType[project.type]}</span>
    <h3>${escapeHTML(project.title)}</h3>
    <p>${escapeHTML(project.description)}</p>
    <div class="tag-list">${project.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join("")}</div>
    ${project.diagram === "monitor"
      ? `<a href="#monitoramento">Ver painel demonstrativo <span aria-hidden="true">↗</span></a>`
      : `<a href="#diagramas" data-open-diagram="${escapeHTML(project.diagram)}">Explorar diagrama <span aria-hidden="true">↗</span></a>`}
  </article>`).join("");
$("#proj").addEventListener("click", event => {
  const link = event.target.closest("[data-open-diagram]");
  if (!link) return;
  const target = DIAGRAMS.find(diagram => diagram.id === link.dataset.openDiagram);
  if (target) showDiagram(target);
});

/* Central de documentos, sem links para arquivos inexistentes. */
$("#certs").innerHTML = DOCUMENTS.map(documentItem => {
  const documentPath = documentItem.path || (documentItem.kind === "CURRÍCULO PDF" ? PERFIL.curriculo : "");
  const documentAction = documentPath ? "Visualizar ou baixar" : documentItem.action;
  return `
  <article class="document-item">
    <span class="document-icon">${escapeHTML(documentItem.icon)}</span>
    <span class="document-type">${escapeHTML(documentItem.kind)}</span>
    <h3>${escapeHTML(documentItem.title)}</h3>
    <p>${escapeHTML(documentItem.description)}</p>
    ${documentPath
      ? `<a href="${escapeHTML(documentPath)}" target="_blank" rel="noopener">${escapeHTML(documentAction)} <span aria-hidden="true">↗</span></a>`
      : `<span class="document-missing" aria-disabled="true">${escapeHTML(documentAction)}</span>`}
  </article>`;
}).join("");

/* QR Code QR Model 2, versão 2-L: gerado localmente, sem enviar telefone a terceiros. */
function multiplyGF(a, b) {
  let result = 0;
  while (b) {
    if (b & 1) result ^= a;
    a <<= 1;
    if (a & 0x100) a ^= 0x11d;
    b >>>= 1;
  }
  return result;
}
function errorCorrection(data, degree) {
  let generator = [1];
  for (let i = 0; i < degree; i++) {
    const next = Array(generator.length + 1).fill(0);
    generator.forEach((value, index) => {
      next[index] ^= value;
      next[index + 1] ^= multiplyGF(value, 1 << i);
    });
    generator = next;
  }
  const remainder = Array(degree).fill(0);
  data.forEach(value => {
    const factor = value ^ remainder.shift();
    remainder.push(0);
    for (let index = 0; index < degree; index++) remainder[index] ^= multiplyGF(generator[index + 1], factor);
  });
  return remainder;
}
function qrMatrix(value) {
  const bytes = [...new TextEncoder().encode(value)];
  if (bytes.length > 32) throw new Error("O endereço do WhatsApp excede a capacidade do QR Code.");
  const bits = [];
  const appendBits = (number, count) => {
    for (let index = count - 1; index >= 0; index--) bits.push((number >>> index) & 1);
  };
  appendBits(4, 4);
  appendBits(bytes.length, 8);
  bytes.forEach(byte => appendBits(byte, 8));
  const capacity = 34 * 8;
  for (let index = 0; index < Math.min(4, capacity - bits.length); index++) bits.push(0);
  while (bits.length % 8) bits.push(0);
  const data = [];
  for (let index = 0; index < bits.length; index += 8) data.push(bits.slice(index, index + 8).reduce((sum, bit) => sum * 2 + bit, 0));
  for (let pad = 0; data.length < 34; pad++) data.push(pad % 2 ? 0x11 : 0xec);
  const codewords = [...data, ...errorCorrection(data, 10)];
  const size = 25;
  const matrix = Array.from({ length: size }, () => Array(size).fill(null));
  const set = (row, column, dark) => { if (row >= 0 && row < size && column >= 0 && column < size) matrix[row][column] = dark; };
  function finder(top, left) {
    for (let row = -1; row <= 7; row++) for (let column = -1; column <= 7; column++) {
      const distance = Math.max(Math.abs(row - 3), Math.abs(column - 3));
      set(top + row, left + column, distance !== 2 && distance !== 4);
    }
  }
  finder(0, 0);
  finder(0, size - 7);
  finder(size - 7, 0);
  for (let index = 8; index < size - 8; index++) {
    set(6, index, index % 2 === 0);
    set(index, 6, index % 2 === 0);
  }
  for (let row = -2; row <= 2; row++) for (let column = -2; column <= 2; column++) {
    set(18 + row, 18 + column, Math.max(Math.abs(row), Math.abs(column)) !== 1);
  }
  const formatData = 8;
  let formatRemainder = formatData << 10;
  for (let bit = 14; bit >= 10; bit--) if ((formatRemainder >>> bit) & 1) formatRemainder ^= 0x537 << (bit - 10);
  const format = ((formatData << 10) | formatRemainder) ^ 0x5412;
  const formatBit = index => ((format >>> index) & 1) !== 0;
  for (let index = 0; index < 6; index++) set(index, 8, formatBit(index));
  set(7, 8, formatBit(6));
  set(8, 8, formatBit(7));
  set(8, 7, formatBit(8));
  for (let index = 9; index < 15; index++) set(8, 14 - index, formatBit(index));
  for (let index = 0; index < 8; index++) set(8, size - 1 - index, formatBit(index));
  for (let index = 8; index < 15; index++) set(size - 15 + index, 8, formatBit(index));
  set(size - 8, 8, true);
  const dataBits = codewords.flatMap(byte => Array.from({ length: 8 }, (_, index) => (byte >>> (7 - index)) & 1));
  let bitIndex = 0;
  let upward = true;
  for (let right = size - 1; right >= 1; right -= 2) {
    if (right === 6) right--;
    for (let step = 0; step < size; step++) {
      const row = upward ? size - 1 - step : step;
      for (let offset = 0; offset < 2; offset++) {
        const column = right - offset;
        if (matrix[row][column] !== null) continue;
        const bit = bitIndex < dataBits.length ? dataBits[bitIndex++] : 0;
        matrix[row][column] = Boolean(bit ^ ((row + column) % 2 === 0));
      }
    }
    upward = !upward;
  }
  const quiet = 4;
  const modules = matrix.map(row => row.map(Boolean));
  const rects = [];
  modules.forEach((row, y) => row.forEach((dark, x) => {
    if (dark) rects.push(`<rect x="${x + quiet}" y="${y + quiet}" width="1" height="1"/>`);
  }));
  return `<svg viewBox="0 0 33 33" role="img" aria-label="QR Code para abrir o WhatsApp de Daniel"><rect width="33" height="33" fill="#fff"/><g fill="#07111d">${rects.join("")}</g></svg>`;
}
const whatsappNumber = normalizeWhatsApp(PERFIL.whatsapp);
$("#whatsappQr").innerHTML = qrMatrix(whatsappNumber || "5573998667504");

/* Painel sintético: valores identificados como simulação em cada área. */
let seed = 41;
const random = () => (seed = seed * 16807 % 2147483647) / 2147483647;
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const fluctuate = (value, min, max, range) => clamp(value + (random() - 0.5) * range, min, max);
const metric = {
  incoming: Array.from({ length: 30 }, () => fluctuate(52, 16, 94, 30)),
  outgoing: Array.from({ length: 30 }, () => fluctuate(26, 8, 60, 18)),
  latency: Array.from({ length: 30 }, () => fluctuate(18, 8, 42, 8)),
  packetLoss: 0.2, cpu: 38, memory: 54, uptime: 99.7,
  bandwidth: [54, 28, 18], servers: [["Gateway", "SIMULADO"], ["Firewall", "SIMULADO"], ["Servidor", "SIMULADO"]]
};
function chart(values, className) {
  const high = Math.max(...values) * 1.15;
  const points = values.map((value, index) => `${(index * 320 / (values.length - 1)).toFixed(1)},${(94 - value / high * 82).toFixed(1)}`).join(" ");
  return `<svg class="monitor-chart" viewBox="0 0 320 100" preserveAspectRatio="none" aria-hidden="true"><path class="${className}" d="M${points.replaceAll(" ", " L")}"/></svg>`;
}
function renderMonitor() {
  const currentIn = metric.incoming.at(-1);
  const currentOut = metric.outgoing.at(-1);
  const currentLatency = metric.latency.at(-1);
  const gauge = (value, label) => {
    const circumference = 157;
    return `<div class="resource-gauge"><svg viewBox="0 0 80 80" role="img" aria-label="${label} simulado: ${Math.round(value)} por cento"><circle class="gauge-track" cx="40" cy="40" r="25"/><circle class="gauge-value" cx="40" cy="40" r="25" stroke-dasharray="${(circumference * value / 100).toFixed(1)} ${circumference}" transform="rotate(-90 40 40)"/><text x="40" y="44">${Math.round(value)}%</text></svg><span>${label}</span></div>`;
  };
  $("#dash").innerHTML = `
    <article class="monitor-panel traffic-panel"><div class="monitor-panel-head"><h3>Tráfego de rede</h3><span>DEMONSTRAÇÃO</span></div>${chart(metric.incoming, "chart-cyan")}${chart(metric.outgoing, "chart-blue")}<div class="chart-legend"><span>Entrada <b>${currentIn.toFixed(1)} Mbps</b></span><span>Saída <b>${currentOut.toFixed(1)} Mbps</b></span></div></article>
    <article class="monitor-panel"><div class="monitor-panel-head"><h3>Latência & perda</h3><span>SIMULADO</span></div><div class="monitor-stat">${currentLatency.toFixed(0)}<small>ms</small></div>${chart(metric.latency, "chart-cyan")}<p class="monitor-note">Perda de pacotes estimada <b>${metric.packetLoss.toFixed(1).replace(".", ",")}%</b></p></article>
    <article class="monitor-panel"><div class="monitor-panel-head"><h3>Disponibilidade</h3><span>SIMULADO</span></div><div class="availability-value">${metric.uptime.toFixed(1).replace(".", ",")}<small>%</small></div><p class="monitor-note">Indicador visual de demonstração</p><div class="availability-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></article>
    <article class="monitor-panel"><div class="monitor-panel-head"><h3>Recursos do sistema</h3><span>SIMULADO</span></div><div class="resource-rings">${gauge(metric.cpu, "CPU")}${gauge(metric.memory, "Memória")}</div><p class="monitor-note">Valores fictícios para demonstração.</p></article>
    <article class="monitor-panel bandwidth-panel"><div class="monitor-panel-head"><h3>Consumo de banda por segmento</h3><span>SIMULADO</span></div>${["Administrativo", "Assistencial", "Visitantes"].map((name, index) => `<div class="bandwidth-row"><span>${name}</span><div><i style="width:${metric.bandwidth[index]}%"></i></div><b>${metric.bandwidth[index]}%</b></div>`).join("")}</article>
    <article class="monitor-panel servers-panel"><div class="monitor-panel-head"><h3>Servidores & equipamentos</h3><span>DEMONSTRAÇÃO</span></div><ul>${metric.servers.map(([name, state]) => `<li><span><i></i>${name}</span><b>${state}</b></li>`).join("")}</ul></article>`;
}
function updateMonitor() {
  metric.incoming.push(fluctuate(metric.incoming.at(-1), 16, 94, 12));
  metric.outgoing.push(fluctuate(metric.outgoing.at(-1), 8, 60, 9));
  metric.latency.push(fluctuate(metric.latency.at(-1), 8, 42, 5));
  metric.incoming.shift();
  metric.outgoing.shift();
  metric.latency.shift();
  metric.packetLoss = fluctuate(metric.packetLoss, 0, 1.2, 0.2);
  metric.cpu = fluctuate(metric.cpu, 20, 72, 4);
  metric.memory = fluctuate(metric.memory, 35, 78, 2);
  metric.bandwidth = metric.bandwidth.map(value => Math.round(fluctuate(value, 8, 70, 5)));
  renderMonitor();
}
renderMonitor();

/* QR is generated once; pause only affects motion and synthetic chart updates. */
const motionButton = $("#motionToggle");
let monitorTimer;
function setMotion(enabled) {
  document.body.classList.toggle("motion-paused", !enabled);
  motionButton.textContent = enabled ? "Pausar animações" : "Retomar animações";
  motionButton.setAttribute("aria-pressed", String(!enabled));
  clearInterval(monitorTimer);
  if (enabled && !reducedMotion) monitorTimer = setInterval(updateMonitor, 2000);
}
if (reducedMotion) {
  document.body.classList.add("motion-paused");
  motionButton.hidden = true;
} else {
  motionButton.addEventListener("click", () => setMotion(document.body.classList.contains("motion-paused")));
  setMotion(true);
}
