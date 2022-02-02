class Restricao {
    constructor(bodyA,pontoB){
      var options = {
        bodyA: bodyA,
        pontoB: pontoB,
        stiffness:1.2,
        lenght: 250

      }
      this.pontoB = pontoB;
      this.rest = Constraint.create(options); 
      console.log(124)
      
      
      
  
      World.add(world,this.rest);
    }
    display (){
      
      push()
      strokeWeight(3)
      line(this.pontoB.x,this.pontoB.y,this.rest.bodyA.position.x,this.rest.bodyA.position.y);
      pop()
  
  
  
  
    }
  }