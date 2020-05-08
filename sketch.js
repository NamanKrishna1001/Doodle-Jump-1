var player;
var ground;
var groundImg;
var playerImg;
var bricks,bricksGroup;
var bgImg;
var bg;
function preload(){
  
  groundImg = loadImage("Images/ground.png");
  playerImg = loadImage("Images/mario1.png");
  bgImg = loadImage("Images/bg.png");
}
function setup() {
  createCanvas(displayWidth-20,displayHeight*2/3);
  bg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  bg.addImage(bgImg);
  bg.scale=2;
  bg.velocityY=-2;
  player = createSprite(50,50,30,30);

  player.addImage(playerImg);
  player.scale=0.3;
  bricksGroup=createGroup();
ground = createSprite(displayWidth/2,displayHeight*2/3,displayWidth,20);
ground.addImage(groundImg);
}

function draw() {
  background(0);  
  if(bg.y<0){
    bg.y=bg.height/2;
  }
  if(keyDown("space")){
    player.velocityY=-10;

  }
  spawnBricks();
  if(keyDown(RIGHT_ARROW)){
    player.x=player.x+1;
  }
  player.velocityY=player.velocityY+1;
  player.collide(ground);
  player.collide(bricksGroup);
drawSprites();
}
function spawnBricks(){
if(frameCount%10==0){
  bricks = createSprite(random(20,displayWidth-20),random(0,displayHeight*2/3),70,10);
  bricks.lifetime=100;
  bricksGroup.add(bricks);

}

}