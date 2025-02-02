const http = require('http');
const fs = require('fs');
const path = require('path');

const { buffer } = require('stream/consumers');

const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        if (req.url === "/") {
            fs.readFile(path.join(__dirname, "Templates", "index.html"), "utf-8", (err, data) => {
                if (err) throw new Error(err)
                res.end(data)
            })
        } else if (req.url === "/about") {
            fs.readFile(path.join(__dirname, "Templates", "about.html"), "utf-8", (err, data) => {
                if (err) throw new Error(err)
                res.end(data)
            })
        } else if (req.url === "/contact") {
            fs.readFile(path.join(__dirname, "Templates", "contact.html"), "utf-8", (err, data) => {
                if (err) throw new Error(err)
                res.end(data)
            })
        }
    } else if (req.method === "POST") {
        res.writeHead(200, { "Content-Type": "text/html, chaarset='utf-8'" })

        const body = []

        req.on("data", data => {
            body.push(Buffer.from(data))
            console.log(body.toString())
        })

        req.on("end", () => {
            const message = body.toString().split("=")[1]
            res.end(`salom foydalanuvchi ${message}`)
        })

    }
})

server.listen(3000, () => {
    console.log(`server has been started port : 3000`)
})