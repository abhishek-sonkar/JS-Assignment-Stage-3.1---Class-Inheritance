const Shape = require('./shape');
class Circle {
    constructor(){
        super();
    }
    calculateArea() {
        console.log("Area of Shape class with color" + this.color + " has been Overriden");
        return 3.14 * 2 * 2;
    }
}
module.exports = Circle;