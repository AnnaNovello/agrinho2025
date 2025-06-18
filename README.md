# agrinho2025

Projeto Agrinho com o tema "festejando entre o campo e a cidade"

## Corrida de Emojis Campo e cidade

### Objetivo

Este projeto foi desenvolvido como atividade do projeto Agrinho para mostrar, de forma divertida e colorida, a interação entre campo e cidade, usando emojis e programação com p5.js.  
O objetivo é promover o aprendizado de programação, criatividade e o uso de ferramentas como o GitHub.

---

### Passo a passo do projeto

1. **Planejamento:**  
   Pensei no tema ( "O tema do Agrinho2025") e decidi usar emojis para representar os personagens da corrida, mudei também as intruções, e coloquei duas cores para representar campo e cidade, usando um projeto antigo que fizemos, do alura, remodelei para o conteúdo "festejando a conexão entre o campo e a cidade", também fiz um final que consiga reiniciar e que uma parte da horizontal azul com os emojis da cidade fossem a aréa urbana, e a parte verde no horizontal a parte rural.

2. **Programação:**  
   - Usei o alura para criar o jogo em JavaScript.
   - Separei o código em passo a passo e o organizei, seguindo inspiração no projeto passado, feito no trimestre passado.
   - Nomeei funções e variáveis de forma clara e explicativa, sempre usando algo que já experimentamos.

3. **Organização do repositório:**  
   - Criei o repositório no GitHub usando o tutorial que a professora passou em aula.
   - Adicionei os arquivos `sketch.js` (código do jogo), `index.html` (estrutura para rodar o p5.js) e este `README.md` (documentação e instruções).

---

### Como jogar

- **Começar:** Aperte qualquer tecla, espaço ou o mouse.
- **Movimentar:**  
  - Q = 🌃 imagem noite na cidade  
  - W = 🚌 Ônibus  
  - E = 👩🏻‍🌾 Agricultora  
  - A = 🌽 Milho  
  - Ou use qualquer seta do teclado para todos correrem juntos!
- **Para reiniciar:** Quando algum emoji vencer, aperte `R` e renicie.

---
### Codigo do jogo 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
// Corrida de Emojis – Campo & Cidade
// Agrinho2025
let xJogador = [0, 0, 0, 0];
let yJogador = [75, 150, 225, 300];
let jogador = ["🌃", "🚌", "👩🏻‍🌾", "🌽"];
let teclas = ["q", "w", "e", "a"]; 
let quantidade = jogador.length;
let vencedor = null;
let areaVencedora = "";
let iniciado = false;
let fim = false;

function setup() {
  createCanvas(400, 400);
  textFont('Georgia');
  textAlign(CENTER, CENTER);
  noLoop();
}

function draw() {
  if (!iniciado) {
    telaInstrucoes();
    return;
  }
  // Fundo: azul em cima, verde embaixo
  for (let y = 0; y < height; y++) {
    if (y < height / 2) {
      stroke("#A3D9FF");
    } else {
      stroke("#B3FFBC");
    }
    line(0, y, width, y);
  }
  noStroke();
  desenhaLinhaDeChegada();
  desenhaJogadores();
  verificaVencedor();
  if (fim) {
    mostrarVencedor();
  }
}

function telaInstrucoes() {
  // Fundo: azul em cima, verde embaixo
  for (let y = 0; y < height; y++) {
    if (y < height / 2) {
      stroke("#A3D9FF");
    } else {
      stroke("#B3FFBC");
    }
    line(0, y, width, y);
  }
  noStroke();
  fill(255, 240);
  rect(40, 85, width-80, 150, 24);
  fill("#2874A6");
  textSize(26);
  text("Corrida de Emojis", width/2, 110);
  fill(40, 40, 60);
  textSize(16);
  text("Campo & Cidade na disputa!", width/2, 134);
  textSize(15);
  text("Q (🌃)  W (🚌)  E (👩🏻‍🌾)  A (🌽)", width/2, 158);
  textSize(14);
  text("Aperte sua tecla para mover seu emoji até a linha rosa.", width/2, 180);
  text("Clique ou pressione qualquer tecla para começar!", width/2, 202);
  textSize(32);
  fill("black");
  text("🌃🚌👩🏻‍🌾🌽", width/2, 260);
  loop();
}

function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < quantidade; i++) {
    fill(255, 220);
    rect(xJogador[i] - 10, yJogador[i] - 25, 48, 48, 14);
    fill(30,30,30);
    text(jogador[i], xJogador[i] + 14, yJogador[i]);
  }
}

function desenhaLinhaDeChegada() {
  fill("#ffffff");
  rect(350, 0, 10, 400);
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    fill("#E34C80");
    rect(350, yAtual, 10, 10);
  }
}

function verificaVencedor() {
  if (fim) return; // Não verifica mais depois que alguém vence
  for (let i = 0; i < quantidade; i++) {
    if (xJogador[i] > 350 && vencedor === null) {
      vencedor = i;
      // Área vencedora
      if (jogador[i] === "👩🏻‍🌾" || jogador[i] === "🌽") {
        areaVencedora = "Área rural venceu!";
      } else if (jogador[i] === "🚌" || jogador[i] === "🌃") {
        areaVencedora = "Área urbana venceu!";
      }
      fim = true;
      noLoop();
    }
  }
}

function mostrarVencedor() {
  fill(255, 240);
  rect(40, 150, width-80, 110, 24);
  textAlign(CENTER, CENTER);
  textSize(28);
  fill("#E34C80");
  text(jogador[vencedor] + " venceu!", width/2, 180);
  textSize(20);
  fill("#2874A6");
  text(areaVencedora, width/2, 210);
  textSize(13);
  fill(40, 40, 60);
  text("Aperte R para reiniciar", width/2, 235);
  textSize(13);
  fill(40, 40, 60, 170);
  text("Tente de novo ou desafie alguém!", width/2, 255);
}

function keyReleased() {
  if (!iniciado) {
    iniciado = true;
    vencedor = null;
    areaVencedora = "";
    fim = false;
    xJogador = [0, 0, 0, 0];
    redraw();
    return;
  }
  // Permite reiniciar com R a qualquer momento após vencedor
  if (fim && key.toLowerCase() === 'r') {
    reiniciarJogo();
    return;
  }
  if (fim) {
    return;
  }
  for (let i = 0; i < quantidade; i++) {
    if (key.toLowerCase() === teclas[i]) {
      xJogador[i] += random(20, 35);
    }
  }
  redraw();
}

function mousePressed() {
  if (!iniciado) {
    iniciado = true;
    vencedor = null;
    areaVencedora = "";
    fim = false;
    xJogador = [0, 0, 0, 0];
    redraw();
  }
}

function reiniciarJogo() {
  xJogador = [0, 0, 0, 0];
  vencedor = null;
  areaVencedora = "";
  iniciado = true;
  fim = false;
  loop();
  redraw();
}

---

### Estrutura do repositório

-plaintext
-index.html
-sketch.js
-README.md

---

### Referências

- [ Youtube – Como criar repositório (vídeo explicativo)](https://www.youtube.com/)  
- [Editor p5.js](https://editor.p5js.org/)
- [GitHub Docs](https://docs.github.com/)
- [Inteligência Artificial](https://chatgpt.com/) 
---

Feito por Anna Julia Novello  
1º ano B – Trabalho de pensamento computacional  
Agrinho 2025 — Corrida de Emojis – Campo & Cidade
