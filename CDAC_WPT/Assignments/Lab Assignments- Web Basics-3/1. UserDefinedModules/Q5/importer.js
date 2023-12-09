var StrOp=require("./myStringModule");
var list = ["www.google.com","www.msn.com","www.amazon.co.in","in.answers.yahoo.com","en.m.wikipedia.com","www.coderanch.com"];

console.log('Is the text "Emil peed deep lime" Palindrome: '+StrOp.palindrome("Emil peed deep lime"));
console.log('Is the text "Rats live on no evil star" Palindrome: '+StrOp.palindrome("Rats live on no evil star"));
console.log('Is the text "Aibohphobia" Palindrome: '+StrOp.palindrome("Aibohphobia"));

console.log(StrOp.upper("tattarrattat"));

var newarr=StrOp.search(list);
console.log(`Total ${newarr.length} elements match the search  criteria: ${newarr}`);




