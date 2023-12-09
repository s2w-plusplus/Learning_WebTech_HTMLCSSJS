
const factorial=function(num){

    return (num<1)? 1 : factorial(num-1)*num;
}; 

const myprime=(num)=>{
  
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0)
            return true; 
    return (num>1)?true:false;             
}
    
const printable=(num)=>{
        for(let i=1;i<=10;i++)
            console.log(` ${num}  X  ${i}  =  ${num*i} `);
}        


 module.exports={factorial,myprime,printable};