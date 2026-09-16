/* =========================================================================
   IMAGENS — os arquivos ficam na pasta /img. Troque o caminho para usar
   suas próprias fotos (ex.: "img/minha-pizza.png").
   ========================================================================= */
const IMG = {
  logo:   "img/logo.webp",
  fresh:  "img/fresh.webp",
  hero:   "img/pizza-banner.webp",
  tomate: "img/tomates.webp",
  pizza1: "img/pizza-1.webp",
  pizza2: "img/pizza-2.webp",
  pizza3: "img/pizza-3.webp",
  pizza4: "img/pizza-4.webp",
  pizza5: "img/pizza-5.webp"
};

/* =========================================================================
   SLOTS DE CONTEÚDO — todo texto, preço e link do site fica aqui
   ========================================================================= */
const CONTEUDO = {

  /* -------- topo -------- */
  marca: { logo: IMG.logo, alt: "Pizzaria dos Manos" },
  navegacao: [
    { rotulo: "Início",   alvo: "#inicio"   },
    { rotulo: "Cardápio", alvo: "#cardapio" },
    { rotulo: "Contato",  alvo: "#contato"  }
  ],

  /* -------- seção 1: banner -------- */
  banner: {
    selo: IMG.logo,
    sobretitulo: "Pizzaria dos Manos",
    tituloLinha1: "Mais que pizza,",
    tituloLinha2: "é sabor em",
    tituloLinha3: "cada fatia.",          // linha em amarelo
    texto: "Ingredientes selecionados, massa artesanal e muito mais sabor para o seu momento.",
    botao: "Ver Cardápio",
    botaoAlvo: "#cardapio",
    foto: IMG.hero
  },

  /* -------- seção 2: cardápio -------- */
  cardapio: {
    sobretitulo: "Nosso cardápio",
    titulo: "Nossas Pizzas",
    pizzas: [
      { nome: "Calabresa",     descricao: "Molho de tomate, calabresa, queijo e orégano.",        preco: "R$ 46,90", foto: IMG.pizza1 },
      { nome: "Frango",        descricao: "Molho de tomate, frango desfiado, queijo e catupiry.", preco: "R$ 52,90", foto: IMG.pizza2 },
      { nome: "Marguerita",    descricao: "Molho de tomate, mussarela, tomate e manjericão.",     preco: "R$ 44,90", foto: IMG.pizza3 },
      { nome: "Quatro Queijos",descricao: "Mussarela, parmesão, provolone e gorgonzola.",         preco: "R$ 56,90", foto: IMG.pizza4 },
      { nome: "Portuguesa",    descricao: "Molho de tomate, presunto, ovo, azeitona e queijo.",   preco: "R$ 49,90", foto: IMG.pizza5 }
    ]
  },

  /* -------- seção 3: rodapé -------- */
  rodape: {
    logo: IMG.logo,
    selo: IMG.fresh,
    tomate: IMG.tomate,
    redes: [],
    colunas: [
      {
        titulo: "Contato",
        itens: [
          { texto: "R. Dr. Jones Castro Lisboa, 161 - Tabuleiro do Martins", icone: "local", link: "https://www.google.com/maps/place/R.+Dr.+Jones+Castro+Lisboa,+161+-+Tabuleiro+do+Martins,+Macei%C3%B3+-+AL,+57081-100/@-9.5734565,-35.7688643,21z/data=!4m16!1m9!3m8!1s0x701485b6f4c221b:0x9bae4eb719ceb1c4!2sR.+Dr.+Jones+Castro+Lisboa,+161+-+Tabuleiro+do+Martins,+Macei%C3%B3+-+AL,+57081-100!3b1!8m2!3d-9.573402!4d-35.7687496!10e5!16s%2Fg%2F11j0zt7rcr!3m5!1s0x701485b6f4c221b:0x9bae4eb719ceb1c4!8m2!3d-9.573402!4d-35.7687496!16s%2Fg%2F11j0zt7rcr?entry=ttu&g_ep=EgoyMDI2MDkxNC4wIKXMDSoASAFQAw%3D%3D" },
          { texto: "+55 82 9110-2728",  icone: "telefone" },
          { texto: "pizzariadosmanos7@gmail.com",              icone: "email"    }
        ]
      }
    ],
    assinatura: "© 2026 Pizzaria dos Manos. Todos os direitos reservados."
  }
};

/* =========================================================================
   Ícones (SVG inline)
   ========================================================================= */
const ICONES = {
  instagram:'<svg viewBox="0 0 24 24"><path d="M12 4.5c2.44 0 2.73.01 3.7.05.89.04 1.37.19 1.69.32.43.16.73.36 1.05.68.32.32.52.62.68 1.05.13.32.28.8.32 1.69.04.97.05 1.26.05 3.71s-.01 2.74-.05 3.71c-.4.89-.19 1.37-.32 1.69-.16.43-.36.73-.68 1.05-.32.32-.62.52-1.05.68-.32.13-.8.28-1.69.32-.97.04-1.26.05-3.7.05s-2.73-.01-3.7-.05c-.89-.04-1.37-.19-1.69-.32a2.9 2.9 0 0 1-1.05-.68 2.9 2.9 0 0 1-.68-1.05c-.13-.32-.28-.8-.32-1.69C4.51 14.74 4.5 14.45 4.5 12s.01-2.74.05-3.71c.04-.89.19-1.37.32-1.69.16-.43.36-.73.68-1.05.32-.32.62-.52 1.05-.68.32-.13.8-.28 1.69-.32.97-.04 1.26-.05 3.7-.05m0-1.65c-2.48 0-2.8.01-3.77.06-.98.04-1.65.2-2.23.43-.61.24-1.12.55-1.63 1.06-.51.51-.82 1.02-1.06 1.63-.23.58-.39 1.25-.43 2.23-.05.98-.06 1.29-.06 3.78s.01 2.8.06 3.78c.4.98.2 1.65.43 2.23.24.61.55 1.12 1.06 1.63.51.51 1.02.82 1.63 1.06.58.23 1.25.39 2.23.43.97.05 1.29.06 3.77.06s2.8-.01 3.77-.06c.98-.04 1.65-.2 2.23-.43.61-.24 1.12-.55 1.63-1.06.51-.51.82-1.02 1.06-1.63.23-.58.39-1.25.43-2.23.05-.98.06-1.29.06-3.78s-.01-2.8-.06-3.78c-.04-.98-.2-1.65-.43-2.23a4.5 4.5 0 0 0-1.06-1.63 4.5 4.5 0 0 0-1.63-1.06c-.58-.23-1.25-.39-2.23-.43-.97-.05-1.29-.06-3.77-.06z"/><path d="M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2zm0 7.59a2.99 2.99 0 1 1 0-5.98 2.99 2.99 0 0 1 0 5.98z"/><circle cx="16.8" cy="7.2" r="1.08"/></svg>',
  whatsapp:'<svg viewBox="0 0 24 24"><path d="M12 3.2a8.7 8.7 0 0 0-7.4 13.3L3.4 20.8l4.4-1.15A8.7 8.7 0 1 0 12 3.2zm0 1.65a7.05 7.05 0 0 1 5.6 11.34 7.05 7.05 0 0 1-9.3 1.9l-.32-.2-2.6.68.7-2.53-.2-.33A7.05 7.05 0 0 1 12 4.85zm-3.1 3.2c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.7 4.2 3.68 2.08.82 2.5.66 2.95.62.45-.04 1.45-.6 1.66-1.17.2-.57.2-1.06.14-1.17-.06-.1-.22-.16-.46-.28-.24-.12-1.45-.72-1.67-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.77.96-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.2-.72-.64-1.21-1.43-1.35-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.75-1.8-.18-.43-.37-.4-.52-.4z"/></svg>',
  local:'<svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 5.1 6.3 12.4 6.57 12.7a.57.57 0 0 0 .86 0C12.7 21.4 19 14.1 19 9a7 7 0 0 0-7-7zm0 9.6A2.6 2.6 0 1 1 12 6.4a2.6 2.6 0 0 1 0 5.2z"/></svg>',
  telefone:'<svg viewBox="0 0 24 24"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1z"/></svg>',
  email:'<svg viewBox="0 0 24 24"><path d="M3 5h18c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1zm9 7.2L4.6 7h14.8z"/></svg>'
};
