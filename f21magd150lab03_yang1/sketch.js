var circleX=0;
var circleY=125;
var bubbleC=20;
var bubbleM=50;
var bubbleA=2;
var circleB=0;
var circleA=260;
var circleD=300.2;
var bubbleD=350
var bubbleE=0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(244,248,252);
  
  ellipse(mouseX,mouseY,pmouseX,pmouseY);
  print(pmouseX + '->' + mouseX);
  
  
  fill(200,250,250);
  ellipse(bubbleE,120,40,40);
  bubbleE = bubbleE + 1;
  
  fill(200,200,200);
  ellipse(circleA,55,20,20);
  circleA = circleA - 2;
  
  fill(200,243,200);
  ellipse(circleD,178,90,90);
  circleD = circleD - 3;
  
  fill(200,150,200);
  ellipse(bubbleD,344,30,30);
  bubbleD = bubbleD - 2;
  
  fill(125,250,250);
  ellipse(circleB,320,47,47);
  circleB = circleB + 2;
  
  fill(250,200,200);
  ellipse(circleX,320,122,122);
  circleX = circleX + 5;
  
  
  fill(200,200,250);
  ellipse(circleY,223,67,67);
  circleY = circleY + 2;
  
  fill(250,200,120);
  ellipse(bubbleC,30,30,30)
  bubbleC = bubbleC + 3
  
  fill(130,200,200);
  ellipse(bubbleM,67,55,55);
  bubbleM = bubbleM + 1
  
  fill(250,145,145);
  ellipse(bubbleA,120,35,35);
  bubbleA = bubbleA + 4
  
  let x1 = 10;
  let y1 = 90;
  let x2 = mouseX;
  let y2 = mouseY;
  
  line(x1,y1,x2,y2);
  ellipse(x1,y1,7,7);
  ellipse(x2,y2,7,7);
  
  let d = dist(x1,y1,x2,y2);
  
  push();
  translate((x1 + x2) / 2, (y1+y2) / 2);
  rotate(atan2(y2 - y1, x2 - x1));
  text(nfc(d, 1), 0, -5);
  pop();
  
  let a = 20;
  let b = 80;
  let c = lerp(a, b, 0.2);
  let f = lerp(a, b, 0.5);
  let e = lerp(a, b, 0.8);

  let y = 50;

  stroke(0); 
  point(a, y);
  point(b, y);

  stroke(100); 
  point(c, y);
  point(f, y);
  point(e, y);
  
  push();
  let numArray = [2, 1, 5, 3, 8, 9, 7, 10];
  fill(0);
  noStroke();
  text('Array Elements', 2, 14);
  // Draw all numbers in the array
  let spacing = 15;
  let elemsY = 25;
  for (let i = 0; i < numArray.length; i++) {
    text(numArray[i], i * spacing, elemsY);
  }
  let maxX = 33;
  let maxY = 80;
  textSize(32);
  text(min(numArray), maxX, maxY);
  pop();
  
  print(223+5);
  print(47-32);
  print(20*1)
  
  push();
  frameRate(10);
  line (mouseX,37,mouseX,10);
  pop();
  
  line(mouseY,64,mouseY,22);
  
  
}