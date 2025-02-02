const http = require('http');
const { buffer } = require('stream/consumers');

const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(`
         <h2>Ismingizni jo'nating</h2>  
        <form method="post", action="/">
            <input type="text" name="name" placeholder="Ismingizni Kiriting"/>
            <button type="submit">Send</button>
        </form>
        `)
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