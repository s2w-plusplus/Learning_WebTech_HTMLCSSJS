var book = {
    bookid : "T9FF",
    name : "Web Technologies BlackBook",
    author : "Kogent Learning Solutions Inc",
    price : 727
};

var fs = require('fs');
fs.appendFile('book.txt', JSON.stringify(book,null,2), (err) =>{
    if (err) throw err;
    else console.log("Data written successfully.");
})