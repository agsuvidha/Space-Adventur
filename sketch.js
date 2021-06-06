var player,playerKnifeImg,bgImg;

function preload() {
  bgImg=loadImage("Images/other-assets/floor.jpg");
  playerKnifeImg=loadImage("Images/player/player-knife.png");
}

function setup() {
  createCanvas(1300,600);
  console.log(width,height);
  
  player=createSprite(1290,550,60,50);
  player.addImage(playerKnifeImg,"plr");
  player.scale=0.3;
 
  level1();
}

function draw() {
  background(0);  
  createEdgeSprites();

  player.velocityX=0;
  player.velocityY=0;

  //player.bounceOff(wall1);
  //player.bounceOff(Edges);
  if(keyDown("RIGHT_ARROW")){
    player.velocityX+=8;
  }
  if(keyDown("LEFT_ARROW")){
    player.velocityX-=8;
  }
  if(keyDown("UP_ARROW")){
    player.velocityY-=8;
  }
  if(keyDown("DOWN_ARROW")){
    player.velocityY+=8;
  }

 text(mouseX+" "+mouseY,mouseX,mouseY);
  drawSprites();
}

function level1(){
  var wall1=createSprite(150,90,10,180); //first vertical top
  wall1.rotation=0;
  var wall2=createSprite(260,390,320,10); //first downward slanted mid
  wall2.rotation=45;

  var wall3=createSprite(80,280,150,10); //second horizontal mid
  wall3.rotation=0;

  var wall4=createSprite(150,510,10,180);//first vertical bottom
  wall4.rotation=0;

  var wall5=createSprite(430,229,200,10); //second upward slanted
  wall5.rotation=145;

  var wall6=createSprite(550,590,600,10); //first horizontal bottom
  wall6.rotation=0;
  
  var wall7=createSprite(670,500,600,10);//second horizontal bottom
  wall7.rotation=0;

  var wall8=createSprite(350,90,10,400); //second vertical top
  wall8.rotation=0;

  var wall9=createSprite(510,90,10,180); //third vertical top
  wall9.rotation=0;


  var wall10=createSprite(805,90,10,400); //fourth vertical top
  wall10.rotation=0;

  var wall11=createSprite(950,290,300,10); //third horizontal middle 
  wall11.rotation=0;
  
  var wall12=createSprite(1095,90,10,400); //fourth vertical top
  wall12.rotation=0;


}

//createEdgeSprites();