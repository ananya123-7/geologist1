class Iron {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 3.0,
        'restitution':0.8
      }
      this.body=Bodies.rectangle(x,y,70,70, options);
      this.widht=70;
      this.height=70;
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill('silver');
        rectMode(CENTER)
        rect(0, 0, this.width, this.height);
        pop();
      }
}
