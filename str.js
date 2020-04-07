class str{
    constructor(bodyA, pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length:10
        }
        this.pointB = pointB;
        this.str = Constraint.create(options);
        World.add(world, this.str);
    }

    attach(body){
        this.str.bodyA = body;
    }

    fly(){
        this.str.bodyA = null;
    }

    display(){
        var pointA = this.str.bodyA.position;
        var pointB = this.pointB;

        push();
        if(this.str.bodyA){
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

        pop();
    }
}