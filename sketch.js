const{Engine, World, Bodies, Constraint} = Matter;

var engine, world;

var str_1, ground_1, ground_2, ground_3, ground_4;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12;

var ball_1;

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ground_1 = new grounds(0, 770, 800, 20);
  ground_2 = new grounds(600, 400, 200, 20);
  ground_3 = new grounds(500, 770, 400, 20);
  ground_4 = new grounds(700, 400, 300, 20);

  b1 = new boxes(600,720);
  b2 = new boxes(625,720);
  b3 = new boxes(650,720);
  b4 = new boxes(615,690);
  b5 = new boxes(640,690);
  b6 = new boxes(625,660);
  b7 = new boxes(675,320);
  b8 = new boxes(700,320);
  b9 = new boxes(725,320);
  b10 = new boxes(690,300);
  b11 = new boxes(715,300);
  b12 = new boxes(700,280);

  ball_1 = new Ball(100, 500);

  str_1 = new str(ball_1.body, {x: 130, y: 420});
 

  /*for(var i = 0; i < 400; i = i + 1){
    boxes_1[i] = new boxes(100, 400)
  }*/

}

function draw(){

  Engine.update(engine);

  background(0, 0, 0);

  ground_1.display();
  ground_2.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  ball_1.display();
 
  str_1.display();
  
  /*for(var i = 0; i < 400; i = i + 1){
    boxes_1[i].display();
  }*/

}

function mouseDragged(){
  Matter.Body.setPosition(ball_1.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){
  str_1.fly();

}

function keyPressed(){
  if(keyCode === 32){
     str_1.attach(ball_1.body);
  }
}