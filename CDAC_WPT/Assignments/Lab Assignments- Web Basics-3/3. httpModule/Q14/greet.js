exports.greet=function(){
    
    const hours=new Date().getHours();
    if(hours<12) return `Good Morning!`;
    else if(hours<17) return `Good Afternoon!`;
    else  return `Good Evening!`;
 
 }