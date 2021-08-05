const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope1;
var fruit;
var fruitConnection;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  rope1 = new Rope(6,{x:245, y:30})

  

  fruit= Bodies.circle(300,300,15)
  Matter.Composite.add(rope1.body,fruit)

  fruitConnection= new Link(rope1,fruit) 
}

function draw() 
{
  background(51);
  ground.show();
  rope1.show();
  Engine.update(engine);
  ellipse(fruit.position.x,fruit.position.y,15,15)

 
   
}
