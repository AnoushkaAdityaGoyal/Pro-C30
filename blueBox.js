class blueBox {
    constructor(x,y,width,height){
      var options = {
          restitutuion : 0.1,
          friction : 1,          
      } 
     this.visibility = 255;
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     World.add(world,this.body);
     }
  
  
display(){
    fill(130,237,237);
    if(this.body.speed<2.5){
      var angle = this.body.angle;
      var pos=this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
      tint(255,this.Visibility);
     }
    else{
      World.remove(world,this.body);
      push();
      this.Visibility=this.Visibility-5;
      pop();
    }
  }
}
