const fs = require("fs")
const path = require("path")

// fs.mkdir(path.join(__dirname, "htmls"), err=>{
//     if(err) throw new Error();

//     console.log("fay yaratildi")
// })

fs.writeFile(path.join(__dirname, "htmls", "suvonov.txt"), "salom dunyo", err=>{
    // console.log(err)
    if(err) throw new Error()
        console.log("txt fayl yaratildi")

    fs.appendFile(path.join(__dirname, "htmls", "suvonov.txt"), " salom node js ", err=>{
        if(err) throw new Error();

        console.log("o'zgartirildi")
        fs.readFile(path.join(__dirname, "htmls", "suvonov.txt"), "utf-8", (err, data)=>{
            if(err) throw new Error();

            console.log(data)
        })
    })
})

