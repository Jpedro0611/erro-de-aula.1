const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var object;
var b1,  b2,  b3;
var b4,  b5,  b6;
var b7,  b8,  b9;
var b10, b11, b12;
var b13, b14, b15;
var b16, b17, b18;
var b19, b20, b21;

var maquina;

var bola;

var restr;

function preload(){
maquina = loadImage("bola de demolicão.png");



}

function setup() {
  var canvas = createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  var object_options = {
    isStatic: true,
  };

  object = Bodies.rectangle(750, 780, 1800, 50, object_options);
  World.add(world, object);

  b1 = new Box(1200,700,70,70);
  b2 = new Box(1350,700,70,70);
  b3 = new Box(1500,700,70,70);
  b4 = new Box(1200,600,70,70);
  b5 = new Box(1350,600,70,70);
  b6 = new Box(1500,600,70,70);
  b7 = new Box(1200,500,70,70);
  b8 = new Box(1350,500,70,70);
  b9 = new Box(1500,500,70,70);
  b10 = new Box(1200,400,70,70);
  b11 = new Box(1350,400,70,70);
  b12 = new Box(1500,400,70,70);
  b13 = new Box(1200,300,70,70);
  b14 = new Box(1350,300,70,70);
  b15 = new Box(1500,300,70,70);
  b16 = new Box(1200,200,70,70);
  b17 = new Box(1350,200,70,70);
  b18 = new Box(1500,200,70,70);
  b19 = new Box(1200,100,70,70);
  b20 = new Box(1350,100,70,70);
  b21 = new Box(1500,100,70,70);

  bola = new Ball(830,200,56,56)

  restr = new Restricao(b14.body,{x:500, y:70})
}

function draw() {
  background('cyan');
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x, object.position.y, 1800, 50);

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
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();

  bola.display();

  image(maquina,200,110,700,700)

//  restr.display();


}

