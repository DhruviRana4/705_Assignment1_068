var http=require("http");

var server=http.createServer((req,res)=>{
    console.log("server1")
})

server.listen(8000,()=>{
    console.log("server listening on port 8000");
})