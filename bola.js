class Ball {
    constructor(x,y,w,h){
      this.body = Bodies.rectangle(x,y,w,h)    
      this.width = w;
      this.height = h;

      
    
  
      World.add(world,this.body);
    }
    display (){
      var angle = this.body.angle
      push()
      translate(this.body.position.x,this.body.position.y)
      rotate(angle)
      ellipseMode(RADIUS)
      ellipse(0,0,this.width,this.height);
      pop()
  
  
  
  
    }
  }