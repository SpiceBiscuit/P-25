
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var bin1, bin2, bin3;
var ground;
var bimage;

function preload(){
	bimage = loadImage("bin.png");
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200, 250, 40);
	
	bin1 = new Bin(1170, 650,  150,10);
	bin2 = new Bin(1095, 600,  10,100);
	bin3 = new Bin(1245, 600,  10,100);
	image(bimage, 1170, 600, 200, 200);

	ground = new Ground(width/2, 665,  width,15);



	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);

  paper.display();
  image(bimage, 1075, 450, 200, 200);

  //bin1.display();
//  bin2.display();
  //bin3.display();

  ground.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW){
       Matter.Body.applyForce(paper.body, paper.position,{x:85,y:-85})		
	}
}

