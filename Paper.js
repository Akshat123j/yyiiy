class Paper{
constructor(x,y,radius){
    var options = {
        'restitution':0.3,
        'friction':0.5,
        'density':1.2,
        isStatic: false
    }
    this.image=loadImage("paper.png");
     this.radius=radius
    this.body = Bodies.circle(x, y, radius, options);
    World.add(world, this.body);
  }
  display(){
    image(this.image,this.body.position.x,this.body.position.y, this.radius,this.radius);
}
}