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