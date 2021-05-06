class Paper {
    constructor(x, y, radius) {
        var options = {
            isStatic:false,
            restitution:0.2,
            friction:0,
            density:0.5
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        rectMode(CENTER);
        //ellipse(0, 0, this.radius);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
      }

}