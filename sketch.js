const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var binImg, dustbin;

function preload(){
    binImg = loadImage("Images/dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    paperObj = new Paper();

    dustbin = createSprite(964,520,20,20);
    dustbin.addImage(binImg);
    dustbin.scale = 0.45;

    binPart1 = new Dustbin(902,505,10,120);
    binPart2 = new Dustbin(962,565,130,10);
    binPart3 = new Dustbin(1024,505,10,120);
}

function draw(){
    background(0);


    textSize(24);
    fill("#008D00");
    
    text("Press the Up Arrow key once to throw away the trash.", 220, 100);

    Engine.update(engine);

    ground.display();
    paperObj.display();
    binPart1.display();
    binPart2.display();
    binPart3.display(); 
      
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:74,y:-75});
    }
}
