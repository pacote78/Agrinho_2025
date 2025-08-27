let estado = 'campo'; // Estado inicial: 'campo'

function setup() {
  createCanvas(800, 400);
  noStroke();
}

function draw() {
  // Cor do fundo que muda conforme o estado
  if (estado === 'campo') {
    background(135, 206, 235); // Céu claro para o campo
  } else if (estado === 'cidade') {
    background(30, 30, 30); // Fundo escuro para a cidade
  }

  // Divisão entre campo e cidade
  line(width / 2, 0, width / 2, height);

  // Desenha os elementos do campo
  if (estado === 'campo') {
    desenhaCampo();
  } 
  // Desenha os elementos da cidade
  else if (estado === 'cidade') {
    desenhaCidade();
  }

  // Texto explicativo sobre o estado atual
  fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text(estado === 'campo' ? 'Campo e Cidade: Conectados!' : 'Cidade e Campo: Conectados!', width / 2, height - 50);
}

function desenhaCampo() {
  // Grama
  fill(34, 139, 34); // Verde
  rect(0, height - 50, width / 2, 50);

  // Árvores
  fill(139, 69, 19); // Tronco
  rect(100, height - 150, 20, 50);
  fill(34, 139, 34); // Folhas
  ellipse(110, height - 170, 60, 60);

  fill(139, 69, 19); // Tronco
  rect(200, height - 170, 20, 60);
  fill(34, 139, 34); // Folhas
  ellipse(210, height - 190, 60, 60);

  // Sol
  fill(255, 223, 0); // Amarelo
  ellipse(100, 100, 80, 80);
}

function desenhaCidade() {
  // Edifícios
  fill(169, 169, 169); // Cor de edifício
  rect(width / 2 + 50, height - 200, 60, 200);
  rect(width / 2 + 150, height - 250, 80, 250);
  rect(width / 2 + 270, height - 220, 50, 220);

  // Janelas dos edifícios
  fill(255, 215, 0); // Luz amarela
  ellipse(width / 2 + 80, height - 150, 10, 10);
  ellipse(width / 2 + 180, height - 180, 10, 10);
  ellipse(width / 2 + 300, height - 170, 10, 10);

  // Carro
  fill(255, 0, 0); // Carro vermelho
  rect(width / 2 + 30, height - 50, 40, 20);

  // Luzes da cidade (semelhança à transição do campo para a cidade)
  fill(255);
  ellipse(width / 2 + 200, height / 2, 10, 10); // Luzes piscando
  ellipse(width / 2 + 250, height / 2, 10, 10); // Luzes piscando
}

function mousePressed() {
  // Alterna entre 'campo' e 'cidade' com o clique
  if (estado === 'campo') {
    estado = 'cidade';  // Transição para cidade
  } else {
    estado = 'campo';  // Transição para campo
  }
}
