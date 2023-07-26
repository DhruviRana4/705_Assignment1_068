const http = require("http");
const static = require("node-static");
const url = require("url");

var fileserver = new static.Server("./staticFiles");

const server = http.createServer((req, res) => {
    console.log("Hello NodeJS...!!");

    var url1 = url.parse(req.url, true);

    if (url1.pathname == "/getHello" && req.method == "GET") {
        res.end("Hello NodeJs...!!");
    }
    else if (url1.pathname === '/') {
        fileserver.serve(req, res);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }

})

server.listen(8080, () => {
    console.log("Server listening on port 8000..!!");
})