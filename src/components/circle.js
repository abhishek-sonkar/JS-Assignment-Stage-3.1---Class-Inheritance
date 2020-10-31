const Shape = require('./shape');
export default class Circle extends Shape {
    constructor(){
        super();
    }
    calculateArea() {
        console.log("Area of Shape class with color" + this.color + " has been Overriden");
        return 3.14 * 2 * 2;
    }
}
module.exports = Circle;