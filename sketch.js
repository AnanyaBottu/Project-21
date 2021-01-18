var sun,mercury,venus,mars,earth;

var invisible

var sunImage,mercuryImage,venusImage,earthImage,marsImage;

function preload(){
sunImage=loadImage('Sun.png');
mercuryImage=loadImage('Mercury.png');
venusImage=loadImage('Venus.png');
earthImage=loadImage('Earth.png');
marsImage=loadImage('Mars.png');
}


function setup() {
  createCanvas(displayWidth-7,displayHeight-115);


  sun=createSprite(0, displayHeight/2-80, 50, 50);
  sun.addImage(sunImage);
  sun.scale=2;


  mercury=createSprite(displayWidth/5+100,displayHeight/2-80, 50, 50);
  mercury.addImage(mercuryImage);
  mercury.setCollider("circle",0,0,mercury.width/10);
  mercury.scale=0.65;


  venus=createSprite(displayWidth/5+300,displayHeight/2-80, 50, 50);
  venus.addImage(venusImage);
  venus.setCollider("circle",0,0,venus.width/10);
  venus.scale=0.75;


  earth=createSprite(displayWidth/5+500,displayHeight/2-80, 50, 50);
  earth.addImage(earthImage);
  earth.setCollider("circle",0,0,earth.width/10);
  earth.scale=0.85;


  mars=createSprite(displayWidth/5+750,displayHeight/2-80, 50, 50);
  mars.addImage(marsImage);
  mars.setCollider("circle",0,0,mars.width/10);
  mars.scale=1.2;


  invisible=createSprite(displayWidth/5+900,displayHeight/2-80,50,50);
  invisible.shapeColor="black";




}

function draw() {
  background(10,0,0);  
  

  if(frameCount%2===0){
    sun.scale=sun.scale+0.09;
  }

  if(sun.collide(mercury)){
    mercury.destroy();
  }

  if(sun.collide(venus)){
    venus.destroy();
  }

  if(sun.collide(earth)){
    earth.destroy();
  }

  if(sun.collide(mars)){
    mars.destroy();
  }

  if(sun.collide(invisible)){
    sun.destroy();
  }
  drawSprites();
}