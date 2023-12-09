

var  palindrome=(text)=>{
    let string=text.trim().toLowerCase();
    for(let i=0,j=string.length-1;i<j;i++,j--)
    if(string.charAt(i) != string.charAt(j))
        return false;
    return true;    
}

var upper=(text)=>{return text.trim().toUpperCase()};

var search=(list)=>{
    let newarr=list.filter(function(StrEle){
       if(StrEle.slice(0,3) == "www") return StrEle;
    });
    return newarr;
};

module.exports={palindrome,upper,search};