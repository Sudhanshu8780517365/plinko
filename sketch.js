var gnd
var angry
var plinkos=[]
var particles=[]
var divisions=[]

var dvd
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

 	//Create the Bodies Here.
  angry=new Plinko(50,50)
    gnd=new Ground(400,700,800,10)
  dvd=new Division(50,650,5,600)
  dvd2=new Division(150,650,5,600)
  dvd3=new Division(250,650,5,600)
  dvd5=new Division(350,650,5,600)
  dvd4=new Division(450,650,5,600)
    //ball =new Ball(50,50)

	Engine.run(engine);

}


function draw() {
   background(0);
   Engine.update(engine)
   angry.display()
   gnd.display()
   dvd.display()
   dvd2.display()
   dvd3.display()
   dvd4.display()
   dvd5.display()
   dvd5.display()
   if(frameCount%60===0){
    particles.push(new Particle(random(0,400),10,10))
   }
   for(var j=0;j<particles.length;j++){
    particles[j].display()
   }
 
   for(var a=50;a<windowWidth;a+=50){
    bll=new Plinko(a,50)
    bll.display()
   }
  }

