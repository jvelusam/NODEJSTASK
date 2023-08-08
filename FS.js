const FS = require('fs');

// FS.writeFile("awasome.html", "Data Content Added", (err) =>
// {

//     if (err)
//     {
//         console.log("Error Occured");
//     }

//     else {
        
//         console.log("File Created succesfully")
//     }

// })

const quotes = "Live More, Worry Less";
//Task
// 1. Create the below file with quotes.

// /backup/

// text-1.html

const [, , n] = process.argv;

for (let i = 1; i <=n; i++)
{
FS.writeFile("./backup/note-"+i+".html", "Data Content Added___"+i, (err) =>
{

    if (err)
    {
        console.log("Error Occured");
    }

    else {
        
        console.log("File Created succesfully")
    }

})

}

FS.readFile("./read.txt", "utf-8", (err, data) => {

    if (err)
    {
        console.log("Error", err);
    }
     console.log("The Content of the file is =>", data);

});
