let name = "Sabari_Preethi"
console.log("Data _Structure" + name)

let date = new Date();
console.log(date)
var logfile_name = '\LOG\Date-Info-' + date.getFullYear() + "-"+ date.getMonth() + "-" + date.getDate() +'.txt'

var fs = require('fs');

// //create a file named mynewfile3.txt:
// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// }); 

fs.writeFile(logfile_name, 'Hello Content!!!'+date,
    function (err)
    {
        if (err)
            throw err;
        console.log("Saved SuccessFully")

    }
)