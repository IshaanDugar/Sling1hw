class Ball{
    constructor(x, y){
        this.body = Bodies.circle(x, y, 30, 30);

        this.width = 30;
        this.height = 30;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        ellipse(pos.x, pos.y, this.width, this.height);
    }
}