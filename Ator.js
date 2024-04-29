
//código do ator
let xAtor = 100;
let yAtor = 366;
let colisao = false
let meusPontos = 0


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 3
  }
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 3
  }
    
}

function verificaColisao(){
  /// collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i ++){
    colisao = collideRectCircle(xCarros[i],yCarros[i],comprimentoCarro,alturaCarro,xAtor,yAtor,15)
    if (colisao){
      somColidiu.play()
      voltarParaInicio ()
    if (meusPontos > 0){
    meusPontos -= 1
    }
    }
  }
}

function voltarParaInicio (){
  yAtor = 366
}

function incluirPontos(){
  textAlign(CENTER)
  text(meusPontos, width / 5,27)
  textSize(25)
  fill(250,140,60)
}


function marcaPonto(){
  if (yAtor < 15){
    somPontos.play()
    meusPontos += 1
    voltarParaInicio ()
  }
}
function podeSeMover(){
  if (yAtor > 366){
    voltarParaInicio ()
  }
}