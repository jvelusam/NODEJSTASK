let name = "Sabari_Preethi"
console.log("Data _Structure" + name)

let date = new Date();
console.log(date)

var fs = require('fs');

// //create a file named mynewfile3.txt:
// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// }); 

fs.writeFile(date+".txt", 'Hello Content!!!',
    function (err)
    {
        if (err)
            throw err;
        console.log("Saved SuccessFully")

    }
)