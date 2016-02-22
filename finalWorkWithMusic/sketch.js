var SOCKET_URL = 'wss://fierce-plains-17880.herokuapp.com/';
var TEAM_NAME  = 'brunch';
var sound;

var xpos = 50;
var ypos = 50;
var speed = 0.1;
var sheeps = [];
var sheepSize = 10;
var sound;

function preload() {
  soundFormats('mp3', 'ogg');
  soundtrack = loadSound('goodtimes.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  noStroke();
  
  socket = io(SOCKET_URL + TEAM_NAME);
  socket.on('feed', addSheep);
  soundtrack.loop();
}

function addSheep(x, y) {
  sheeps.push({
    x: x,
    y: y,
  });

}

function mousePressed() {
  addSheep(mouseX, mouseY);
  socket.emit('feed', mouseX, mouseY);
  
}

function draw() {
  clear();
  background(65, 205, 255);
  grass();
  for (var i=0; i<sheeps.length; ++i) {
    fill(0);
    vector = new p5.Vector((sheeps[sheeps.length-1].x-xpos),(sheeps[sheeps.length-1].y-ypos));
    xpos = xpos + speed*vector.x;
    ypos = ypos + speed*vector.y;
    sheep(xpos,ypos);
  }
  
}
function grass(){
  push();
  stroke(255,255,255, 80);
  strokeWeight(8)
  fill(189, 232, 124);
  ellipse(windowWidth*1.2, windowHeight*1.6, windowWidth*2.2, windowHeight*2.5);
  pop();
  
  push();
  stroke(255,255,255, 80);
  strokeWeight(8)
  fill(189, 232, 124);
  ellipse(windowWidth*0.2, windowHeight*1.6, windowWidth*2.2, windowHeight*2.5);
  pop();
}
function sheep(x, y){
  push();
  strokeWeight(4);
  fill(0, 0, 0);
  rect(x+85, y+140, 10, 50);
  pop();
 
  push();
  strokeWeight(4);
  fill(0, 0, 0);
  rect(x+110, y+140, 10, 50);
  pop();

  push();
  strokeWeight(4);
  fill(0, 0, 0);
  rect(x+250, y+140, 10, 50);

  push();
  strokeWeight(4);
  fill(0, 0, 0);
  rect(x+275, y+140, 10, 50);
  pop();

//body
  push();
  strokeWeight(4);
  fill(254, 250, 241);
  rect(x+40, y-40, 300, 185, 100);
  pop();

//fluffy
  push();
  strokeWeight(4);
  fill(254, 250, 241);
  ellipse(x+340, y+15, 50, 50);
  pop();

  push();
  strokeWeight(4);
  fill(254, 250, 241);
  ellipse(x+300, y-5, 60, 60);
  pop();
 
  push();
  strokeWeight(4);
  fill(254, 250, 241);
  ellipse(x+258, y-15, 70, 70);
  pop();
 
  push();
  strokeWeight(4);
  fill(254, 250, 241);
  ellipse(x+208, y-21, 65, 65);
  pop();
  
  push();
  strokeWeight(4);
  fill(254, 250, 241);
  ellipse(x+153, y-22, 70, 70);
  pop();
  
  push();
  strokeWeight(4);
  fill(254, 250, 241);
  ellipse(x+103, y-12, 70, 70);
  pop();
  
  push();
  strokeWeight(4);
  fill(254, 250, 241);
  ellipse(x+70, y+18, 60, 60);
  pop();
  
  push();
  strokeWeight(4);
  fill(254, 250, 241);
  ellipse(x+60, y+55, 60, 60);
  pop();
  
  push();
  strokeWeight(4);
  fill(254, 250, 241);
  ellipse(x+75, y+95, 70, 70);
  pop();
  
  push();
  strokeWeight(4);
  fill(254, 250, 241);
  ellipse(x+107, y+125, 60, 60);
  pop();
  
  push();
  strokeWeight(4);
  fill(254, 250, 241);
  ellipse(x+147, y+130, 60, 60);
  pop();
  
  push();
  strokeWeight(4);
  fill(254, 250, 241);
  ellipse(x+197, y+130, 70, 70);
  pop();  
  
  push();
  strokeWeight(4);
  fill(254, 250, 241);
  ellipse(x+247, y+131, 60, 60);
  pop();
  
  push();
  strokeWeight(4);
  fill(254, 250, 241);
  ellipse(x+282, y+129, 50, 50);
  pop();  
  
  push();
  strokeWeight(4);
  fill(254, 250, 241);
  ellipse(x+310, y+109, 50, 50);
  pop(); 
  
  
  
//body cover
  push();
  noStroke();
  fill(254, 250, 241);
  rect(x+42, y-38, 305, 189, 100);
  pop();
  
//ears
  push();
  strokeWeight(4);
  fill(254, 246, 228);
  translate(x+290,y+40)
  rotate(0.6)
  ellipse(0, 0, 25, 50);
  pop();
 
  push();
  strokeWeight(4);
  fill(254, 246, 228);
  translate(x+385,y+40)
  rotate(-0.6)
  ellipse(0, 0, 25, 50);
  pop(); 
  
//horn
  push();
  strokeWeight(4);
  fill(254, 246, 228);
  translate(x+290,y-2)
  rotate(-0.5)
  rect(0, 0, 15, 40, 15);
  pop();
 
  push();
  strokeWeight(4);
  fill(254, 246, 228);
  translate(x+372,y-8);
  rotate(0.5);
  rect(0, 0, 15, 40, 15);
  pop();
  
//face
  push();
  strokeWeight(4);
  fill(254, 246, 228);
  rect(x+300, y+7, 75, 100, 20);
  pop();

  
//covers
  push();
  noStroke();
  fill(254, 246, 228);
  translate(x+290,y+40)
  rotate(0.6)
  ellipse(0, 0, 22, 50);
  pop();

  push();
  noStroke();
  fill(254, 246, 228);
  translate(x+385,y+40)
  rotate(-0.6)
  ellipse(0, 0, 22, 50);
  pop();

  push();
  noStroke();
  fill(254, 246, 228);
  translate(x+292,y-2)
  rotate(-0.5)
  rect(0, 0, 12, 33, 15);
  pop();
 
  push();
  noStroke();
  fill(254, 246, 228);
  translate(x+373,y-7);
  rotate(0.5);
  rect(0, 0, 12, 33, 15);
  pop();

//eyes
  push();
  strokeWeight(3);
  fill(254, 246, 228);
  ellipse(x+305, y+40, 20, 23);
  pop();
  
  push();
  strokeWeight(3);
  fill(254, 246, 228);
  ellipse(x+370, y+40, 20, 23);
  pop();

//Pupil
  push();
  noStroke();
  fill(0, 0, 0);
  ellipse(x+305, y+40, 7, 7);
  pop();
  
  push();
  noStroke();
  fill(0, 0, 0);
  ellipse(x+370, y+40, 7, 7);
  pop();

//mouth
  push();
  noStroke();
  fill(0, 0, 0);
  rect(x+319, y+86, 35, 15, 25);
  pop();

//body dot
  push();
  noStroke();
  fill(0, 0, 0);
  translate(x+105, y+20);
  rotate(0.6);
  ellipse(0, 0, 5, 17);
  pop();
  
  push();
  noStroke();
  fill(0, 0, 0);
  translate(x+109, y+30);
  rotate(0.6);
  ellipse(0, 0, 5, 7);
  pop();
  
  push();
  noStroke();
  fill(0, 0, 0);
  translate(x+225, y+100);
  rotate(0.6);
  ellipse(0, 0, 5, 12);
  pop();
  
  push();
  noStroke();
  fill(0, 0, 0);
  translate(x+232, y+106);
  rotate(0.6);
  ellipse(0, 0, 5, 7);
  pop();
}