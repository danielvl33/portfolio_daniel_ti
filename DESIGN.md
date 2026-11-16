---
name: CYBER OPS — Daniel Lopes Soares
description: Portfólio de redes e infraestrutura com topologias exploráveis e conteúdo profissional factual.
colors:
  background: "#05070D"
  surface: "#111827"
  surface-raised: "#151F30"
  text: "#F5F7FA"
  muted: "#9CAFC2"
  blue: "#087CFF"
  cyan: "#00BFFF"
  line: "rgba(0, 191, 255, 0.2)"
  signal: "#00BFFF"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(4.5rem, 8.3vw, 8.1rem)"
    fontWeight: 700
    lineHeight: 0.82
    letterSpacing: "-0.045em"
  body:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.15em"
rounded:
  square: "0px"
  node: "3px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.cyan}"
    textColor: "#06121B"
    rounded: "{rounded.square}"
    padding: "12px 18px"
    height: "48px"
  button-secondary:
    backgroundColor: "rgba(8, 124, 255, 0.08)"
    textColor: "{colors.text}"
    rounded: "{rounded.square}"
    padding: "12px 18px"
    height: "48px"
---

# Design System: CYBER OPS

## Overview

**Creative North Star: "Topologia em Foco"**

CYBER OPS apresenta a infraestrutura como uma rede legível: conexões, equipamentos e serviços aparecem como topologias, fichas técnicas e demonstrações identificadas. O visitante começa pelo mapa ilustrativo, entende a atuação de Daniel e pode explorar temas, laboratórios e contato sem confundir demonstrações com experiência real.

O universo visual é uma interface de operações de rede, não uma simulação de telemetria real. O preto espacial sustenta a leitura, o azul elétrico e o ciano marcam conexões e ações, e painéis grafite organizam o conteúdo. Bordas finas e traços de fluxo sugerem sinal; efeitos luminosos ficam discretos para preservar contraste e clareza.

**Key Characteristics:**
- Topologia de rede como elemento visual principal.
- Painéis escuros de geometria predominantemente quadrada.
- Ciano para ações, conexões e estados de destaque.
- Conteúdo técnico marcado como fato, tema correlato, referência ou demonstração.

## Colors

A paleta completa de preto, azul e ciano expressa uma central de operações sem sacrificar a leitura do conteúdo profissional.

### Primary
- **Ciano de sinal** (#00BFFF): ações principais, conexões, estados selecionados, links e destaques em diagramas.
- **Azul tecnológico** (#087CFF): segundo acento para segmentar topologias, links e detalhes de infraestrutura.

### Neutral
- **Preto espacial** (#05070D): fundo principal, criando contraste para a navegação e o conteúdo.
- **Grafite de painel** (#111827): cartões, nós e áreas de informação.
- **Grafite elevado** (#151F30): superfícies de segundo plano e componentes com mais destaque.
- **Branco técnico** (#F5F7FA): títulos e texto principal.
- **Azul acinzentado** (#9CAFC2): texto secundário e metadados; use tons mais claros quando a densidade visual exigir.
- **Linha ciano** (rgba(0, 191, 255, 0.2)): divisores e contornos leves, não texto.

**The Signal Rule.** Ciano e azul indicam relação, ação ou estado; não os use como decoração concorrente do conteúdo.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow, sans-serif fallback)

**Body Font:** DM Sans (with system-ui, sans-serif fallback)

**Label Font:** DM Sans

**Character:** A display condensada cria hierarquia e escala nas manchetes; DM Sans mantém descrições e controles confortáveis em telas menores.

### Hierarchy
- **Display** (700, clamp(4.5rem, 8.3vw, 8.1rem), line-height 0.82): nome e assinatura da página inicial.
- **Headline** (600, clamp(2.9rem, 5vw, 4.65rem), line-height 0.92): títulos de seção.
- **Title** (600, 1.4–2rem, line-height 1.02): cartões, painéis e títulos de conteúdo.
- **Body** (400, 1rem, line-height 1.65): leitura principal; textos de apoio mantêm largura controlada por contexto.
- **Label** (600, 0.68rem, line-height 1.4, letter-spacing 0.15em, caixa alta quando identificador): categorias, status e metadados.

**The Two-Voice Rule.** Barlow Condensed marca hierarquia; DM Sans carrega leitura, controles e dados.

## Layout

O conteúdo usa um eixo central de até 1320px, com espaçamento lateral fluido. A página inicial reserva duas colunas para texto e topologia; em telas menores, o diagrama passa abaixo do texto. Seções usam áreas amplas e separadores finos para que a leitura não pareça uma grade de cartões repetidos. Catálogos e painéis usam colunas que se reduzem em sequência.

Os estilos responsivos principais estão em 1160px, 760px e 520px: a navegação passa para menu controlável, composições de duas colunas empilham e as grades densas tornam-se uma coluna em celulares estreitos. Filtros de equipamento podem rolar horizontalmente; os cartões acadêmicos e de projeto permanecem exploráveis por controles acessíveis.

## Elevation & Depth

A profundidade é predominantemente tonal: fundo quase preto, painéis grafite e contornos finos. Sombras deslocadas aparecem com moderação em cartões de contato e estados de interação; o brilho ciano é uma pista de sinal, não uma camada genérica de vidro. Não use blur para esconder texto ou separar blocos.

**The Layering Rule.** Priorize mudança de superfície e borda antes de adicionar sombra; reserve halos para sinais e ações.

## Shapes

O vocabulário é quadrado e técnico: botões, filtros, cartões e painéis mantêm cantos retos; nós de diagramas usam arredondamento discreto de 3px. Divisores finos, retângulos de status e linhas de circuito reforçam a leitura de infraestrutura. Evite pílulas e cantos exageradamente arredondados.

## Components

### Buttons
- **Shape:** retangular, sem raio (0px).
- **Primary:** fundo ciano, texto escuro e padding de 12px 18px, com altura mínima de 48px.
- **Hover / Focus:** elevação curta no hover; contorno visível de 2px ciano no foco de teclado.
- **Secondary:** superfície azul translúcida, contorno ciano e texto claro.
- **Unavailable:** currículo sem arquivo é texto inativo com explicação, nunca um link quebrado.

### Chips
- **Style:** filtros retangulares com fundo transparente, texto azul-claro e borda discreta.
- **State:** a seleção recebe contorno e fundo ciano suaves; todos os controles de filtro comunicam estado por `aria-pressed`.

### Cards / Containers
- **Corner Style:** quadrado, com contorno fino e superfícies grafite.
- **Background:** cartões de conteúdo usam grafite sobre fundo escuro; cartões acadêmicos mantêm leitura expansível.
- **Border:** contorno de baixa ênfase; ciano aparece no hover e em marcadores, não como faixa grossa lateral.
- **Internal Padding:** aproximadamente 16–24px conforme a densidade.
- **Shadow Strategy:** discreta e deslocada apenas em componentes que precisam de elevação.

### Inputs / Fields
- **Style:** campo de busca escuro, retangular, com contorno ciano de baixa intensidade e altura mínima de 48px.
- **Focus:** contorno `:focus-visible` de 2px ciano com deslocamento de 4px.
- **Error / Disabled:** não inventar estado sem necessidade; estados desabilitados explicam a indisponibilidade.

### Navigation
- **Style:** barra escura fixa no topo, marca à esquerda e links compactos alinhados à direita.
- **Hover / Focus:** texto ciano no hover e contorno visível ao navegar por teclado.
- **Mobile:** botão de menu com `aria-expanded` controla a lista vertical; selecionar um destino fecha o menu.

### Topology Map
O SVG da página inicial representa uma arquitetura ilustrativa. Linhas tracejadas sugerem fluxo, nós nomeados identificam os papéis da rede e uma legenda informa que não há telemetria ao vivo.

### Monitor Panels
Gráficos, indicadores de disponibilidade, recursos e tráfego são simulados e identificados como demonstração. Preserve esse aviso em cada painel e não conecte estado visual a métricas reais sem integração confirmada.

### Digital Contact Card
O cartão combina os contatos oficiais, links acionáveis e um QR Code local que codifica o endereço `wa.me` informado. Não substitua nem acrescente dados de contato sem confirmação.

## Do's and Don'ts

### Do:
- **Do** manter os contatos oficiais WhatsApp, e-mail e GitHub como links acionáveis.
- **Do** indicar visualmente quando equipamento ou imagem é referência, e não item pessoal.
- **Do** rotular métricas e topologias como simulações ou demonstrações.
- **Do** apresentar temas acadêmicos como correlatos até confirmação documental.
- **Do** respeitar teclado, foco visível e preferência por movimento reduzido.

### Don't:
- **Don't** apresentar métricas sintéticas como monitoramento de rede real.
- **Don't** classificar laboratórios, estudos ou diagramas como projetos concluídos ou experiência profissional.
- **Don't** afirmar disciplinas cursadas, graduação concluída, certificados, equipamentos pessoais ou contatos não confirmados.
- **Don't** introduzir gradientes de texto, excesso de brilho ou animação que prejudique leitura.
