const http=require("http");
const static=require("node-static");
var url=require("url");

var fileServer=new static.Server("./testFolder");

const server=http.createServer((req,res)=>{
    console.log("Hello node...!!");
    fileServer.serve(req,res);
    var url2=url.parse(req.url,true);
    console.log(url2.pathname)
    if(url2.pathname=="/"){
        fileServer.serve(req,res)
        
    }else if(url2.pathname=="/process" && req.method==="GET"){
        res.end("Email : " + url2.query.user_email  + " Password : " + url2.query.pwd);
    }else if(url2.pathname=="/process_post" && req.method==="POST"){
        // console.log("first")
        let body="";
        req.on("data",chunk=>{
            body+=chunk;
        });

        req.on("end",()=>{
            res.write(body);
            res.end();
        })
    }else{
        res.end("page not found...!!")
    }
})

server.listen(8080,()=>{
    console.log("Server started...!!")
})