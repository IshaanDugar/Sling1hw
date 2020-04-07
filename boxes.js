class boxes{
    constructor(x, y){
        var options ={
            "restitution":0.5,
            "friction":1.0
        }
    this.body = Bodies.rectangle(x, y, 25, 25, options);

    this.width = 25;
    this.height = 25;

    World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y)
        pop();

        rect(pos.x, pos.y, this.width, this.height);
    }
}