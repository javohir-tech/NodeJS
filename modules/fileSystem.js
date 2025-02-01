const fs = require("fs");
const path = require("path")

fs.mkdir(path.join(__dirname, "tamplates"), err=>{
    if (err) throw new  Error();

    console.log("Fayl yaratildi")
})


