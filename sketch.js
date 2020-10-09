
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var kid,tree,kidIMG,treeIMG,mango1;

function preload(){

kidIMG = loadImage("pictures/boy.png");	

treeIMG = loadImage("pictures/tree.png");

}

function setup() {
	createCanvas(1215, 700);

  	 engine = Engine.create();
	 	world = engine.world;
	

	//Create kid here 
	kid = createSprite(200,600,20,20)
    kid.addImage(kidIMG);
    kid.scale = 0.1;
	
	//create tree here 
	tree = createSprite(910,400,20,20);
	tree.addImage(treeIMG);
	tree.scale = 0.5;
	Engine.run(engine);
  
	//create mango here 
	  mango1 = new Mango(900,300,50); 
	  mango2 = new Mango(883,200,50);
    mango3 = new Mango(815,255,50);
    mango4 = new Mango(752,293,50);
    mango5 = new Mango(980,250,50);

    //create stone here 
    stone1 = new Stone(192,600,50);



	//create rope here 
	sling = new SlingShot(stone1.body,{x:155,y:550})
   



}


function draw() {
  rectMode(CENTER);
  background(255);
//display sprites  
  drawSprites();

  //display mango 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  //display stone 
  stone1.display();

  //display rope 
  sling.display();
  
  //display collision
  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);

   

  }
 function keyPressed(){
if (keyCode === 32){
  Matter.Body.setPosition(stone1.body,{x:155,y:550})
  sling.attach(stone1.body) 

}



 }

function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
  
  
  
  }
  
  function mouseReleased(){
  
  sling.fly()
  
  
  
  }

function detectCollision(stone1,mango){
mangobodyposition = mango.body.position
stonebodyposition = stone1.body.position
console.log(mango.r+stone1.r);
var distance = dist(stonebodyposition.x,stonebodyposition.y,mangobodyposition.x,mangobodyposition.y);
if (distance <= mango.r + stone1.r ) {
  Matter.Body.setStatic(mango.body,false)

}

}