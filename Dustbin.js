class Dustbin {
  constructor(x, y,width,height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0,
        'isStatic': true
    }
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);
  }
  display(){
    rectMode(CENTER);
    fill("white");
    rect(this.body.position.x,this.body.position.y, this.width, this.height);
  }
}

  