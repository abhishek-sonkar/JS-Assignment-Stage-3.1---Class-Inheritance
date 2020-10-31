class Shape {
    constructor() {
        this.color = "green";
    }
    drawShape() {   
        console.log("Shape is drawn");
    }
    claculateArea() {
        console.log ("Area of shape is calculated");
    }
}
module.exports = Shape;