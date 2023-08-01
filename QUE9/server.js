const http=require("http");
const mysql=require("mysql");
const static=require("node-static");

var fileserver=new static.Server("./public");

var conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"employeedb"
});
conn.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("connected")
    }
})

async function getData(){
   
}
var server=http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url=="/"){
        fileserver.serve(req,res);
    }
    if(req.url=="/getData"){
        conn.query("SELECT * FROM `emptb`",(err,data)=>{
            if(err){
                return "err";
            }
            res.end(JSON.stringify(data));
        })
    }
    if(req.url=="/insert_emp_data" && req.method==="POST"){
        let data = '';
        req.on('data', (chunk) => {
            data += chunk;
        });
        req.on("end",()=>{
            var fd=JSON.parse(data);
            // console.log(fd.name)
            var sql=`INSERT INTO emptb(emp_name, emp_email, emp_pwd) VALUES ('${fd.ename}','${fd.eEmail}','${fd.epwd}')`;
            conn.query(sql,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    res.end("success");
                }
            })
        })
        // res.end();
    }
})

server.listen(8000,()=>{
    console.log("server listening on port 8000");
})