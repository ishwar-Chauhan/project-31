const Engine =Matter.Engine
const World = Matter.World
const Bodies=Matter.Bodies

var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300
var score = 0

function setup() {
  createCanvas(800,800);
  engine=Engine.create()
  world=engine.world
  ground = new Ground(width/2,height,width,20)

  for (var k = 0; k <=width; k = k +80){
    divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight))
  }

  for (var j = 40; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }
  for (var j = 15; j<=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 40; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 15; j<=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,375));
  }

 //createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  
  Engine.update(engine);
  ground.display();

  for (var j = 0; j < particles.length; j++){

    particles[j].display();
  }

  for (var k = 0; k < divisions.length; k++){

    divisions[k].display();
  }

  for (var i = 0; i < plinkos.length; i++){

    plinkos[i].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30),10,10))
    score++;
  }
 fill("blue") 
 textSize(30)
 text("Score:"+score,10,40)

  drawSprites();
}