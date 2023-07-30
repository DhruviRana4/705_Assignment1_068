var http=require("http");

var server=http.createServer((req,res)=>{
    console.log("server3")
})

server.listen(3000,()=>{
    console.log("server listening on port 3000");
})