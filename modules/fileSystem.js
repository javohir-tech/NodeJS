const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "notes", "javohir.txt")

async function myFunction(){
    try {
        await fs.appendFile(filePath, "salom dunyo")
        console.log("muvafaqiyyatli  o'zgartirildi ")

        const data = await fs.readFile(filePath, "utf-8")
        console.log(data)
    }
    catch(err){
        console.log(err)
        throw new Error("Xatolik vyu vyu")
    }
}

myFunction()