let house;
let bird;

function preload(){
  house = loadModel('house.obj');  
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  bird = loadImage('bird.gif')
}

function draw() {
  background(252, 182, 227);
  orbitControl();
  noStroke()
  
  camera(0, 0, 0 , 0, 0, 0, 0, 1, 0);  camera(0,-95, 450, 0, 0, 1, 0, 1, 0);
  
  //glasshouse
  push();
  translate(0,-15,0);
  rotateX(3.13);
  scale(0.009);
  fill(148, 228, 255, 80)
 // rotateY(frameCount * 0.01);
  model(house);
  pop(); 
  
   push();
  translate(-250,-15,50);
  rotateX(3.13);
  scale(0.009);
  fill(148, 228, 255, 80)
 // rotateY(frameCount * 0.01);
  model(house);
  pop();
  
   push();
  translate(250,-15,50);
  rotateX(3.13);
  scale(0.009);
  fill(148, 228, 255, 80)
 // rotateY(frameCount * 0.01);
  model(house);
  pop();
  
   
   push();
  translate(-250,-15,250);
  rotateX(3.13);
  scale(0.009);
  fill(148, 228, 255, 80)
 // rotateY(frameCount * 0.01);
  model(house);
  pop();
  
  //landscape
  push();
  translate(-80,0,0);
  fill(255, 128, 210);
  box(1000, 10, 700);
  pop();
  
  
  
  //glasshouse
 // push();
  //rotateX(frameCount * 0.01);
//  scale(-5);
 // rotateY(frameCount * 0.01);
 // model(house);
 // pop(); 
   
}