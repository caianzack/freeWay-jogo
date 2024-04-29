//código do carro

let xCarros = [600,600,600,600,600,600]
let yCarros = [40,96,150,210,270,318]
let velocidadeCarros = [6.5,3.5,4.5,6,3.3,4]
let comprimentoCarro = 50
let alturaCarro = 40

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
    }
}

function voltaPosicaoInicialDoCarro(){
  if (xCarros[0] < -50){
    xCarros[0] = 600
  }
  if (xCarros[1] < -50){
    xCarros[1] = 600
  }
  if (xCarros[2] < -50){
    xCarros[2] = 600
  }
    if (xCarros[3] < -50){
    xCarros[3] = 600
  }
  if (xCarros[4] < -50){
    xCarros[4] = 600
  }
  if (xCarros[5] < -50){
    xCarros[5] = 600
  }
}
