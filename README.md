# Pizzaria dos Manos — site de página única

Estrutura do projeto:

```
index.html          → marcação das 3 seções (banner, cardápio, rodapé)
css/estilo.css      → cores, tipografia e layout (tokens no bloco :root)
js/conteudo.js      → SLOTS: textos, preços, links e caminhos das imagens
js/site.js          → monta a página a partir dos slots + menu e rolagem
img/                → imagens já recortadas do layout
```

## Como abrir no VS Code

1. Abra a pasta no VS Code (`Arquivo > Abrir Pasta`).
2. Instale a extensão **Live Server** (Ritwick Dey).
3. Clique com o botão direito em `index.html` → **Open with Live Server**.

Abrir o `index.html` com dois cliques também funciona, mas o Live Server
recarrega sozinho a cada alteração salva.

## O que editar

Quase tudo fica em `js/conteudo.js`:

- `IMG` — caminho das imagens. Ex.: `pizza1: "img/calabresa.png"`.
- `CONTEUDO.navegacao` — itens do menu do topo.
- `CONTEUDO.banner` — as três linhas do título (a terceira é a amarela),
  texto de apoio e rótulo do botão.
- `CONTEUDO.cardapio.pizzas` — nome, descrição, preço e foto. Pode
  adicionar ou remover itens da lista; a grade se ajusta sozinha.
- `CONTEUDO.rodape` — redes sociais, as três colunas e a assinatura.
  Na última coluna, `icone` aceita `"local"`, `"telefone"` ou `"email"`.

Cores e fontes ficam em `css/estilo.css`, no bloco `:root`
(`--creme`, `--tinta`, `--ouro`, `--display`, `--sans`).
