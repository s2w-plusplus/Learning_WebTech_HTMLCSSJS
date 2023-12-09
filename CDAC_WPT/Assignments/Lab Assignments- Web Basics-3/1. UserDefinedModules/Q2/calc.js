

var add=(a,b)=>{return a+b};
var sub=(a,b)=>{return a-b};
var mul=(a,b)=>{return a*b};
var div=(a,b)=>{return a/b};
//ES5 way
/*var sum=function(){
    let sum=0;
    for(i=0;i<arguments.length;i++)
        sum+=arguments[i];
        return sum;
    }*/

//ES6 way
var sum=(...arr)=>{return arr.reduce(function(total,current){
        return total + current;
    });
}

module.exports={add,sub,mul,div,sum};