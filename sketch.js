var engine;
var myWorld;
var starBody;
var star;
var star_1;
var fairy;
var fairy_1;
var starnight;
var starnight_1;

function preload(){

  starnight_1 = loadImage("images/starnight.png");

  star_1 = loadImage("images/star.png");

  fairy_1 = loadImage("images/fairy.png");


}

function setup() {
  createCanvas(800,400);

// create a engine
  engine = Matter.Engine.create();

//create a world
  myWorld = engine.world;

  //stars = Matter.Body;

  //create a background
starnight = createSprite(800,400,20,20);
starnight.addImage(starnight_1);

//create a fairy
  fairy = createSprite(50,300,20,20);
  fairy.addImage(fairy_1);
  fairy.scale = 0.1;  

  
//create a star
  star = createSprite(750,270,30,30);
  star.addImage(star_1);
  star.scale = 0.1;


// create a physical body 
  starBody = Matter.Bodies.rectangle(400,200,50,3);

  //stars.Image(star_1);

  //adding bodies to world
Matter.World.add(myWorld,starBody);
}
function draw() {
  background("black");

  if(keyDown("left")){
fairy.x = fairy.x - 3;
     }

  if(keyDown("right")){
fairy.x = fairy.x + 3;
     }
    
   
//rectMode(CENTRE);
rect(starBody.position.x,starBody.position.y,50,3,star.png);

drawSprites();
}