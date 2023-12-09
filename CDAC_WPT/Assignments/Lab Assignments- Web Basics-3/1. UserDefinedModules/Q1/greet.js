exports.greet=function(){
    
   const hours=new Date().getHours();
   if(hours<12) console.log(`Good Morning!`);
   else if(hours<17) console.log(`Good Afternoon!`);
   else  console.log(`Good Evening!`);

}