const http = require("http");

const server = http.createServer((request, response)=>{
    //request - sorov
    //response - javob
    console.log(request.url)

    response.write('<h1 style="color:"red">Salom Dunyo</>')
    response.end()
})

server.listen(3000, ()=>{
    console.log("Server has been started on port : 3000")
})