/* =========================================================================
   Montagem da página a partir dos slots
   ========================================================================= */
const $ = s => document.querySelector(s);
const texto = (sel,valor) => { const el=$(sel); if(el) el.textContent = valor; };

/* topo */
$("#navLogo").src = CONTEUDO.marca.logo;
$("#navLogo").alt = CONTEUDO.marca.alt;
$("#navLinks").innerHTML = CONTEUDO.navegacao
  .map(l => `<a class="nav__link" href="${l.alvo}">${l.rotulo}</a>`).join("");
$("#navSocial").innerHTML = [
  { rede: "instagram", link: "https://www.instagram.com/pizzariados_manos?stkn=bjhld2F2a3cWhr" },
  { rede: "whatsapp", link: "https://wa.me/c/202946516119727" }
].map(s => `<a href="${s.link}" target="_blank" rel="noreferrer" aria-label="${s.rede}">${ICONES[s.rede] || ""}</a>`).join("");

/* seção 1 */
const b = CONTEUDO.banner;
$("#heroSelo").src = b.selo;  $("#heroSelo").alt = CONTEUDO.marca.alt;
texto("#heroSobre", b.sobretitulo);
$("#heroTitulo").innerHTML =
  `${b.tituloLinha1}<br>${b.tituloLinha2}<br><span class="destaque">${b.tituloLinha3}</span>`;
texto("#heroTexto", b.texto);
$("#heroBtn").querySelector("span").textContent = b.botao;
$("#heroBtn").href = b.botaoAlvo;
$("#heroFoto").src = b.foto;
$("#heroFoto").alt = "Pizza da casa em tábua de madeira";

/* seção 2 */
texto("#menuSobre", CONTEUDO.cardapio.sobretitulo);
texto("#menuTitulo", CONTEUDO.cardapio.titulo);
$("#pizzas").innerHTML = CONTEUDO.cardapio.pizzas.map(p => `
  <article class="pizza">
    <div class="pizza__foto"><img src="${p.foto}" alt="Pizza ${p.nome}" loading="lazy"></div>
    <span class="pizza__traco"></span>
    <h3 class="pizza__nome">${p.nome}</h3>
    <p class="pizza__desc">${p.descricao}</p>
    <span class="pizza__preco">${p.preco}</span>
  </article>`).join("");

/* seção 3 */
const r = CONTEUDO.rodape;
$("#rodapeLogo").src = r.logo;   $("#rodapeLogo").alt = CONTEUDO.marca.alt;
$("#rodapeFresh").src = r.selo;  $("#rodapeFresh").alt = "";
$("#rodapeTomate").src = r.tomate;
$("#redes").innerHTML = (r.redes || []).map(s => `
  <a href="${s.link}" aria-label="${s.rede}">${ICONES[s.rede] || ""}</a>`).join("");
$("#colunas").innerHTML = (r.colunas || []).map(c => `
  <div>
    <span class="col__traco"></span>
    <h3 class="col__titulo">${c.titulo}</h3>
    <ul class="col__lista">
      ${c.itens.map(i => `<li class="col__item">
        ${i.icone ? ICONES[i.icone] : ""}
        ${i.link ? `<a href="${i.link}">${i.texto}</a>` : `<span>${i.texto}</span>`}
      </li>`).join("")}
    </ul>
  </div>`).join("");
texto("#assinatura", r.assinatura);

/* =========================================================================
   Comportamento: menu mobile, link ativo e sombra da barra
   ========================================================================= */
const paginas = $("#paginas"), nav = $("#nav"), links = $("#navLinks");

$("#btnMenu").addEventListener("click", e => {
  const aberto = links.classList.toggle("aberto");
  e.currentTarget.setAttribute("aria-expanded", aberto);
});
links.addEventListener("click", e => {
  if (e.target.closest("a")) links.classList.remove("aberto");
});

/* rolagem interna: âncoras precisam rolar o contêiner .paginas */
document.addEventListener("click", e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const alvo = document.querySelector(a.getAttribute("href"));
  if (!alvo) return;
  e.preventDefault();
  paginas.scrollTo({ top: alvo.offsetTop, behavior: "smooth" });
});

paginas.addEventListener("scroll", () => {
  nav.classList.toggle("solida", paginas.scrollTop > 20);
}, { passive: true });

const observador = new IntersectionObserver(entradas => {
  entradas.forEach(en => {
    if (!en.isIntersecting) return;
    document.querySelectorAll(".nav__link").forEach(l =>
      l.setAttribute("aria-current", l.getAttribute("href") === "#" + en.target.id));
  });
}, { root: paginas, threshold: .5 });
document.querySelectorAll(".secao").forEach(s => observador.observe(s));
