// imagens do jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//sons do jogo
let somTrilha;
let somPontos;
let somColidiu;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarro,imagemCarro2,imagemCarro3,
                 imagemCarro,imagemCarro2,imagemCarro3]
  somTrilha = loadSound("sons/trilha.mp3")
  somPontos = loadSound("sons/pontos.wav")
  somColidiu = loadSound("sons/colidiu.mp3")
}