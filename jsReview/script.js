class Vehicle {
    constructor(color,model){
        this.color = color,
        this.model=model
    }

    go(){
        console.log("i go");
    }
}

class Car extends Vehicle{
    constructor(color,model,speed) {
        super(color,model)
        this.speed=speed
    }

    speed() {
        console.log("i go fast!");
    }
}

const bmw = new Car("black", "bmw", 190)
console.log(bmw);