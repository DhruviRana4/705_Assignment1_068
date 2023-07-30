const http=require("http");
const static=require("node-static");
const url=require("url");
const websocket=require("ws");             

var fileServer=new static.Server("./public");
var server=http.createServer((req,res)=>{
    var url2=url.parse(req.url,true);
    // console.log("Hello NodeJs...!!");
    if(url2.pathname==""){
        console.log(url2)
    }
    fileServer.serve(req,res);
})

server.listen(8000,()=>{
    console.log("server listening on port 8000");
})

var wss=new websocket.Server({server:server});
wss.on("connection",(ws)=>{
    ws.send("hello client..!!");
    ws.on("message",(msg)=>{
        ws.send("I recieved ==> " + msg);
    })
})