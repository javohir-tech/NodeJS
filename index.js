const http = require("http");

const server = http.createServer((request, response)=>{
    console.log(request.url)

    response.write("<h1>Salom Dunyo3</h1>")
    response.write("<h1>Salom Dunyo34</h1>")
    response.end()
})

server.listen(2700, ()=>{
    console.log("Server has been started port : 2700")
})