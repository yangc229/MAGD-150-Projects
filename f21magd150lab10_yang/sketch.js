let sliderGroup = [];
let x;
let y;
let z;
let centerX;
let centerY;
let centerZ;
let h = 20;

var table;

function preload() {
  table = loadTable("cities.csv","csv","header");
}

function setup() {
  createCanvas(700, 400, WEBGL);
  
  for(var i = 0; i <6; i++) {
    if(i === 2) {
      sliderGroup[i] = createSlider(10,400,200);
    } else {
      sliderGroup[i] = createSlider(-400,400,0);
    }
    h = map(i,0,6,5,85);
    sliderGroup[i].position(10,height+h);
    sliderGroup[i].style('width','80px');
  }
  
  console.log(table.getRowCount()+ "total rows in table");
  console.log(table.getColumnCount("total columns in table"));
  console.log(table.getColumn("name"));
  
  for (var r = 0; r < table.getRowCount(); r++){
    for (var c = 0; c < table.getColumnCount(); c++) {
      console.log(table.getString(r, c));
    }
  }
}

function draw() {
  background(0);
  
  push();
  X = sliderGroup[0].value();
  Y = sliderGroup[1].value();
  Z = sliderGroup[2].value();
  centerX = sliderGroup[3].value();
  centerY = sliderGroup[4].value();
  centerZ = sliderGroup[5].value();
  camera(X,Y,Z,centerX,centerY,centerZ,0,4,0);
  stroke(255);
  fill(255,200,94);
  translate(40,10,0);
  box(50,50,50);
  pop();
  
  push();
  pointLight(0,0,255,mouseX-200,mouseY-200,200);
  ambientMaterial(255);
  sphere(100);
  pop();

  push();
  translate(-240,100,0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  ambientLight(255);
  ambientMaterial(255);
  box(70, 100, 70);
  pop();
  
  noStroke();
  fill(50);
  normalMaterial();
  push();
  translate(100,-100,0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(70,70,70);
  pop();
  
  push();
  noFill();
  stroke(255);
  translate(500,height*0.35,-200);
  sphere(300);
  pop();
  
  translate(-200,-50,0);
  push();
  normalMaterial();
  rotateZ(frameCount*0.01);
  rotateX(frameCount*0.01);
  rotateY(frameCount*0.01);
  torus(50,20);
  pop();
}