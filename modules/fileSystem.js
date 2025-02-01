const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, "templates"), err => {
//     if (err) throw new Error()
//     console.log("file was created succesfuly")
// })

// fs.mkdir(path.join(__dirname, "notes"), err => {
//     if (err) throw new Error();

//     console.log("notes yaratildi")
// })

fs.writeFile(path.join(__dirname, "notes", "javohir.txt"), "Suvonov Javohir", err => {
    if (err) throw new Error;

    console.log("papka yartildi va text yozildi ")

    fs.appendFile(path.join(__dirname, "notes", "javohir.txt"), " Alimardon o'g'li ", err => {
        if (err) throw new Error()

        console.log("o'zgartirish kiritildi")
        fs.readFile(path.join(__dirname, "notes", "javohir.txt"), "utf-8", (err, data) => {
            if (err) throw new Error()
            console.log(data)
        })

    })

})


