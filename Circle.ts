export class Circle{
    radius:number;
    constructor(radius:number){
        this.radius=radius
    }
    getRadius(): number{
        return this.radius;
    }
    setRadius(radius:number){
        this.radius=radius
    }
    toString():string{
        return "A Circle with radius = "
        + this.getRadius()
    }
}