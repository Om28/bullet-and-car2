 const Engine= Matter.Engine;
 const World= Matter.World;
 const Bodies= Matter.Bodies;

 var engine,world;
 var object;
 var ground;
 var ball;

 
 
 function setup() {
  var canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world();
  object=Bodies.rectangle(200,100,50,50,object_options);
  World.add(world.object);
var ground_options={
isStatic:true


}
ground=Bodies.rectangle(200,390,200,20,ground_options);
World.add(world.ground)

var ball_options={
 restitution:1.0

}

ball=Bodies.circle(200,100,20);
World.add(world.ball);




console.log(object);
console.log(object.position.x);
console.log(object.position.y);

}

function draw() {
  background(10);  
rectMode(CENTER);

rect(object.position.x,object.positons.y,50,50);




  drawSprites();









}