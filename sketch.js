const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,550,1200,12)

    ground2 = new Ground(499, 100, 700, 100)
    
    
    /*box1 = new Box(500,100,50,50)
    box2 = new Box(500,100,50,50)
    box3 = new Box(500,100,50,50)
    box4 = new Box(500,100,50,50)
    box5 = new Box(500,100,50,50)
    box6 = new Box(500,100,50,50)
    
    
    
    box7 = new Box(700,100,50,50)
    box8 = new Box(700,100,50,50)
    box9 = new Box(700,100,50,50)
    box10 = new Box(700,100,50,50)*/

    ball1 = new ball(-300,690,150,150)
    chain2 = new chain(ball1.body,{x:200,y:100},200, 200)

    //console.log(ball1.x);
    //console.log(ball1.y);

    ball2 = new ball(350,200,150,150)
    chain3 = new chain(ball2.body,{x:350,y:100},200, 200)

    ball3 = new ball(500,200,150,150)
    chain4 = new chain(ball3.body,{x:500,y:100},200, 200)

    ball4 = new ball(650,200,150,150)
    chain5 = new chain(ball4.body,{x:650,y:100},200, 200)

    ball5 = new ball(800,200,150,150)
    chain6 = new chain(ball5.body,{x:800,y:100},200, 200)


  console.log(ground1.x);
  console.log(ground1.y);

}

function draw(){
    background(0);
    Engine.update(engine);
    ground1.display();
    /*box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    box7.display();
    box8.display();
    box9.display();
    box10.display();*/

    ground2.display();

    ball1.display();
    //chain1.display();
    chain2.display();

    ball2.display();
    chain3.display();

    ball3.display();
    chain4.display();

    ball4.display();
    chain5.display();

    ball5.display();
    chain6.display();
    
}
function mouseDragged(){
    
        Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
    

   
}
