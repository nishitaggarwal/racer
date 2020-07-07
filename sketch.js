var PLAY = 1
var END = 0
var gameState = 1

var player
var botCar

var carGroup;

var score = 0

function preload(){

car1 = loadImage("car1.png")
car2 = loadImage("car2.png")
car3 = loadImage("car3.png")
car4 = loadImage("car4.png")

}

function setup() {
  createCanvas(800,400);

  player = createSprite(400, 200, 50, 50);
  player.addImage("car1",car1)
  player.scale = 0.5

  carGroup = new Group();
}

function draw() {
  background(104,159,56);  





  spawnBotCar();
  
 textSize(20)

 text("score" + score,600,50)

 score = score + 20

 text("pls dont go out of the screen",550,330)
 
if(keyIsDown(UP_ARROW) ){
  //score = score + 20
  //player.velocityX = 3
 // player.velocityY = -3
}

if(keyIsDown(LEFT_ARROW) ){
  score = score + 2
  player.velocityX = -3
 // player.velocityY = -3
}

if(keyIsDown(RIGHT_ARROW) ){
  score = score + 2
  player.velocityX = 3
 // player.velocityY = -3
}

if(score > 1000000){

text("hurrah you win",550,200)
}




//carGroup.setVelocityYEach(0);

//carGroup.setLifetimeEach(-1);





 

  drawSprites();
}

function spawnBotCar(){

if (frameCount %  60 === 0){


botCar = createSprite(random(100,650),0,50,50)
var rand = Math.round(random(1,3))

switch(rand) {
  case 1: botCar.addImage(car2);
          break;
  case 2: botCar.addImage(car3);
          break;
  case 3: botCar.addImage(car4);
          break;
  default: break;
}

botCar.scale = 0.5
botCar.velocityY = 4.4
botCar.lifetime = 103


carGroup.add(botCar)
}

}
