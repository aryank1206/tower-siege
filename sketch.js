const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var score;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var score=0






function setup() {
  
  getBackgroundImage();
  
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  
  ground=new Ground();
  stand1=new Stand(380,300,270,10);
  stand2=new Stand(700,200,200,10);
 
  
  
  b1= new Block(280,275,30,40)
  
  b2= new Block(310,275,30,40)
  b3= new Block(340,275,30,40)
  b4= new Block(370,275,30,40)
  b5= new Block(400,275,30,40)

  b6= new Block(430,275,30,40)
  b7= new Block(460,275,30,40)
  b8= new Block(490,275,30,40)

  b9= new Block(310,235,30,40)
  b10= new Block(340,235,30,40)
  b11= new Block(370,235,30,40)
  b12= new Block(400,235,30,40)
  b13= new Block(430,235,30,40)
  b14= new Block(460,235,30,40)

  b15= new Block(340,195,30,40)
  b16= new Block(370,195,30,40)
  b17= new Block(400,195,30,40)
  b18= new Block(430,195,30,40)

  b19= new Block(370,155,30,40)
  b20= new Block(400,155,30,40)

  b21= new Block(385,115,30,40)



  bs1=new Block(640,175,30,40)
  bs2=new Block(670,175,30,40)
  bs3=new Block(700,175,30,40)
  bs4=new Block(730,175,30,40)
  bs5=new Block(760,175,30,40)

  bs6=new Block(670,135,30,40)
  bs7=new Block(700,135,30,40)
  bs8=new Block(730,135,30,40)

  bs9=new Block(700,95,30,40)



  ball=Bodies.circle(50,200,20)
  World.add(world,ball)

  slingShot=new SlingShot(this.ball,{x:200,y:200})
}

function draw() {
  
  background(0)
  Engine.update(engine);
  
  strokeWeight(2);
  stroke("white")
  textSize(13);
  fill("red");
  text("Score:"+score,width-300,50);

  fill("black")
  stand1.display();
  stand2.display();
  fill("purple")
  b1.display();
  
  b1.score();
  
  b2.display();
  b2.score();
  b3.display();
  b3.score();
  b4.display();
  b4.score();
  b5.display();
  b5.score();
  b6.display();
  b6.score();
  b7.display();
  b7.score();
  b8.display();
  b8.score();
  fill("orange")
  b9.display();
  b9.score();
  b10.display();
  b10.score();
  b11.display();
  b11.score();
  b12.display();
  b12.score();
  b13.display();
  b13.score();
  b14.display();
  b14.score();
  fill("lime")
  b15.display();
  b15.score();
  b16.display();
  b16.score();
  b17.display();
  b17.score();
  b18.display();
  b18.score();
  fill("navy")
  b19.display();
  b19.score();
  
  b20.display();
  b20.score();
  fill("red")
  b21.display();
  b21.score();
fill("purple")
  bs1.display();
  bs1.score();
  bs2.display();
  bs2.score();
  bs3.display();
  bs3.score();
  bs4.display();
  bs4.score();
  bs5.display();
  bs5.score();
  fill("orange")
  bs6.display();
  bs6.score();
  bs7.display();
  bs7.score();
  bs8.display();
  bs8.score();
  fill("red")
  bs9.display();
  bs9.score();
  drawSprites();
fill("pink")
  ellipse(ball.position.x,ball.position.y,20,20)
  slingShot.display();
}


function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
  
}

function keyPressed(){
  if(keyCode==32){
    slingShot.attach(this.ball)
  }
}

async function getBackgroundImage(){
  var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON=await response.json();

  var datetime= responseJSON.datetime;
  var hour=datetime.slice(11,13);

  if(hour>=06 && hour<=18){
    
    background("orange");
  }
  else{
    background("black");
    
  }
} 