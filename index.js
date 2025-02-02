const http = require("http");

const server = http.createServer((request, response)=>{
    console.log(request.url)

    response.write("<h1>Salom Dunyo</h1>")
    response.end()
})

server.listen(2700, ()=>{
    console.log("Server has been started port : 2700")
})