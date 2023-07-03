// Convert the UML diagram to Javascript class. - use number for double

class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }

    toString() {
        return `Circle with radius ${this.radius} and color ${this.color}`;
    }
}

// Example usage:
const circle1 = new Circle(5, "red");
console.log(circle1.getArea()); // Output: 78.53981633974483
console.log(circle1.toString()); // Output: "Circle with radius 5 and color red"