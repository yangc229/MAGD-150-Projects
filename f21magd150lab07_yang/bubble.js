class Bubble{
  constructor(c,a,t){
    this.x = c;
    this.y = a;
    this.r = t;
  }
  move(){
    this.x = this.y + random(-1,1);
  this.y = this.y + random(-1,1);
  }
  show(){
    stroke(255);
    fill(206,60,45);
    ellipse(this.x,this.y,this.r*2);
  
  }
}