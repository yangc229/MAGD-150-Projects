let bubble1;
let bubble2;

var spot={
  x:133,
  y:68,
};
var circles = []; 

function setup() { 
  createCanvas(400, 400);
   bubble1=new Bubble(200,200,40);
  bubble2=new Bubble(400,200,20);
  noStroke();
  for (var i = 0; i < 50; i++) {
    var x = random(width);
    var y = random(height/3);
    var d = random(20, 150);
    var c = color(random(204), random(60), 45);
    var s = random(0.2, 3);
  	circles[i] = new DrawCircle(x, y, d, c, s);
  }
} 

function draw() { 
  background(220);
  for (var i = 0; i < circles.length; i++) {
  	circles[i].move();
    circles[i].display();
    
    //rain
     var r = random(10, 255);
  fill(255,r);
  spot.x=random(400,0);
  spot.y=random(0,400);
  ellipse(spot.x, spot.y, 5, 70);
  }
  
  // keep the number of circles on the canvas under 60
  if (circles.length > 60) {
  	circles.shift();
  }
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}

function mousePressed() {
  // click the mouse to create a new DrawCircle object
  var d = random(20, 150);
  var c = color(random(204), 100, random(60));
  var s = random(0.2, 3);
	var newCircle = new DrawCircle(mouseX, mouseY, d, c, s);
  circles.push(newCircle);
}

function DrawCircle( x, y, d, c, s ) {
  // declare the properties
  this.xPos = x;
  this.yPos = y;
  this.diameter = d;
	this.color = c;
  this.speed = s;
}

DrawCircle.prototype = {
	constructor: DrawCircle,
  display: function() {
    fill(this.color);
    ellipse(this.xPos,this.yPos, this.diameter, this.diameter);
    
  },
  
  move: function() {
		this.yPos += this.speed;
    // the circle is outside the canvas, retset its position at the top
    if (this.yPos - this.diameter/2 > height) {
    	this.yPos = -this.diameter/2;
    }
	}
}