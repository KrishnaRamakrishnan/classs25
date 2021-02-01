class Baseclass {
    constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.3,
          'friction':3.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image= loadImage("sprites/base.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      //fill("purple");
      //rect(0, 0, this.width, this.height);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };
  