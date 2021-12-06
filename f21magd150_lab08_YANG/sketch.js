let lines = [];
let i = 0;

let img; // declare variable 'img'.
let photo;

function preload(){
    img = loadImage('hangover/the hangover.jpg'); // load image
  photo = loadImage('hangover/thehangover2.jpg'); // load image 2
}

function setup() {
  createCanvas(400, 400);
 loadStrings("lines.txt", doText);
}

function doText(data){
  lines = data;
}

function draw() {
  background(200);
  
  push();
  photo.filter(GRAY);
  image(photo,25,200,230,150); //image 2
  pop();
  
  push();
  tint(0,153,204,126); // tint blue and set transparency
  image(img,145,70,230,150); // image 1
  pop()
;  
  //for (let i = 0; i < lines.length; i++) {
    text(lines[i], 5, 20*i+20);
  //}
  
  push();
  fill(55,100,220);
  textSize(50);
  textFont('Helvetica');
  text('The Hangover',35,60);
  pop();
  
  push();
  fill(0);
  textSize(20);
  textFont('Georgia');
  line(0,380,width,380)
  textAlign(CENTER,BOTTOM);
  text('Only In Theaters',0,380,width)
  pop();
}

function mousePressed(){
  i++;
  console.log(lines[i]);
}
