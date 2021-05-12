
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
dustbinImg=loadImage("dustbingreen.png");
ballImage=loadImage("paper.png");
}

function setup() {
	createCanvas(800, 650);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper1=new Paper(100,50,70);

  dustbin1=new Dustbin(650,575,150,20);
  dustbin2=new Dustbin(565,485,20,200);
  dustbin3=new Dustbin(735,485,20,200);

  ground=new Ground(400,600,800,30);

  dustbin=createSprite(650,470,150,100);
  dustbin.addImage(dustbinImg);
  dustbin.scale=0.6;

  Launcher=new Launcher(paper1.body,{x: 200, y: 200})
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(200);

  keyPressed();

  paper1.display();

  ground.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  Launcher.display();

  drawSprites();
}

function keyPressed(){
  if(keyCode===UP_ARROW){
   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
  }
}

function mouseDragged(){
 
    Matter.Body.setPosition(paper1.body,{x: mouseX, y: mouseY})

}
function mouseReleased(){
  Launcher.fly()
}
