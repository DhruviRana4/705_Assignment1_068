var http=require("http");

var server=http.createServer((req,res)=>{
    console.log("server2")
})

server.listen(8080,()=>{
    console.log("server listening on port 8080");
})