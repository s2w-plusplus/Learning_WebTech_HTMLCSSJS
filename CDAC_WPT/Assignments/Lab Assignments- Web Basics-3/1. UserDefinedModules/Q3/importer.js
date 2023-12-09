var imported=require("./mymodule");

console.log(imported.factorial(4));
console.log(imported.myprime(79)?"prime":"non-prime");
console.log(` `);
imported.printable(7);