const fs = require("fs")
const path = require("path")

// fs.mkdir(path.join(__dirname, "Style"),err=>{
//     if(err){
//         console.log(err)
//         throw new Error("xatolik")
//     }
//     console.log("palka yaratildi")
// })

const filePath = path.join(__dirname, "Style", "Suvonov.txt")

fs.writeFile(path.join(filePath), "salom dunyo", err=>{
    if(err){
        console.log(err)
        throw new Error("Xatolik")
    }
    console.log("yaratildi va text qo'shildi")  

    fs.appendFile(filePath, " hayr dunyo", err=>{
        if(err) throw new Error("xatolik o'zgartirishda")
            console.log("o'zgartirildi")

        fs.readFile(filePath, "utf-8", (err, data)=>{
            if(err){
                throw  new Error("oqishda muammo")
            }
            console.log(data)
        })
    })
})

