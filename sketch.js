//PASSO 1 CRIAR AS VARIÁVEIS
var trex, trex_correndo;
var solo, soloimagem;

function preload() {
    //carregar a imagem do solo
    soloimagem = loadImage("solo.png");

    //carregar a animação do t-rex

}

function setup() {
    createCanvas(600, 200);
    //criar a sprite solo;
    solo = createSprite(300, 190, 600, 20);
    //adicionar a imagem na sprite solo
    solo.addImage(soloimagem);
    //dar velocidade ao solo




    //criar a sprite trex;

    //adicionar a animação na sprite do t-rex

    //definir o tamanho da animação


}

function draw() {
    background("white");

    //reiniciar a posição do solo automaticamente


    //fazer o trex pular se apertar espaço


    //dar gravidade ao trex



    //impedir o trex de cair no abismo



    drawSprites();

}