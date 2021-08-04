class Plinko extends BaseClass {
  constructor(x,y){
    super(x,y,10,10);
    this.color=color(random(0,255),random(0,255),random(0,255))
  }

  display() {
     var pos =this.body.position;
      rectMode(CENTER);
      fill(255)
      circle(pos.x, pos.y, this.width, this.height);
    
 //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    //fill("white");
    super.display();
  }
}
