const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "notes", "javohir.txt")

// fs.mkdir(path.join(__dirname, "templates"), err => {
//     if (err) throw new Error()
//     console.log("Tayyorlandi Template")
// })

// fs.mkdir(path.join(__dirname, "notes"), err => {
//     if (err) throw new Error()

//     console.log("Notes Tayoorlandi")
// })

async function procresFunction(){
    try{
        await fs.writeFile(filePath, "Suvonov Javohir");
        console.log("papka yaratildi va text yozildi ");

        await fs.appendFile(filePath, " ALimardon O'g'li");
        console.log("Txt o'zgartirildi")

        const data = await fs.readFile(filePath, "utf-8");
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
}

procresFunction();