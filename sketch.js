var background1
var box1
var box2
var box3
var box4
var box5
var box6
var box7
var box8
var box9
var music
var ball

function preload(){
  music = loadSound('ironman_airborne.mp3')
}

function setup(){
  createCanvas(800,600);
  background1 = createSprite(400,300,800,600);
  box1 = createSprite(100,590,170,20);
  box2 = createSprite(285,590,190,20);
  box3 = createSprite(480,590,190,20);
  box4 = createSprite(675,590,190,20);
  box5 = createSprite(150,290,170,20);
  box6 = createSprite(380,390,170,20);
  box7 = createSprite(550,220,170,20);
  ball = createSprite(50,50,20,20);
}

function draw(){
  background("gray");
  background1.shapeColor = "gray"
  box1.shapeColor = "skyblue"
  box2.shapeColor = "gold"
  box3.shapeColor = "red"
  box4.shapeColor = "pink"
  box5.shapeColor = "black"
  box6.shapeColor = "violet"
  box7.shapeColor = "lightgreen"
  ball.shapeColor = "white"
  
if(ball.isTouching(box1)){
  ball.shapeColor = "skyblue"
}
  
  if(ball.isTouching(box2)){
    ball.shapeColor = "gold"
  }
  
  if(ball.isTouching(box3)){
    ball.shapeColor = "red"
  }
  
  if(ball.isTouching(box4)){
    ball.shapeColor = "pink"
  }
  
  if(ball.isTouching(box5)){
    ball.shapeColor = "black"
  }
  
  if(ball.isTouching(box6)){
    ball.shapeColor = "violet"
  }
  
  if(ball.isTouching(box7)){
    ball.shapeColor = "lightgreen"
  }
  
  if(keyDown("enter")){
    music.play();
  }
  
  if(keyDown("space")){
   music.stop();
  }
  
 if(keyDown("down")){
    ball.y = ball.y+5
  }
  
  if(keyDown("up")){
    ball.y = ball.y-5
  }
  
  if(keyDown("right")){
    ball.x = ball.x+5
  }
  
  if(keyDown("left")){
    ball.x = ball.x-5
  }
  
  drawSprites();
}