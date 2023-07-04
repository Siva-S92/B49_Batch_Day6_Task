// Convert the UML diagram to Javascript class. - use number for double

class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    getRadius(){
        console.log(this.radius);
    }
    setRadius(value){
        this.radius = value;
    }

    getColor(){
        console.log(this.color);
    }
    setColor(value){
        this.color = value;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }

    toString() {
        return `Circle with radius ${this.radius} and color ${this.color}`;
    }
    getCircumference(){
        return 2 * Math.PI * this.radius;
    }
}

// Example usage:
const circle1 = new Circle();
circle1.setRadius(5); //setting radius as 5
circle1.setColor("red"); //setting color as red
circle1.getRadius(); //Output: 5
circle1.getColor(); //Output: red


console.log(circle1.getArea()); // Output: 78.53981633974483
console.log(circle1.toString()); // Output: "Circle with radius 5 and color red"
console.log(circle1.getCircumference()); //Output: 31.41592653589793
