
var circle = require("./Circle");
var rad = 6;
console.log("Circle:");
console.log("Area: "+circle.calcArea(rad));
console.log("Circumference: "+circle.calcCircumference(rad));
console.log("Diameter: "+circle.calcDiameter(rad));


var rectangle = require("./Rectangle");
var len=2,brdth=3;
console.log("Rectangle:");
console.log("Area: "+rectangle.calcArea(len,brdth));
console.log("Perimeter: "+rectangle.calcPerimeter(len,brdth));


var triangle = require("./Triangle");
var a=3,b=3,c=3;
console.log("Triangle:");
console.log("Is it Equilateral -> "+triangle.isEquilateral(a,b,c));
console.log("Its perimeter: "+triangle.calcPerimeter(a,b,c));
