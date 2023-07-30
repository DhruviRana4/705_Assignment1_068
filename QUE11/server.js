const axios = require("axios");
const http = require("http");
const static = require("node-static");
const url = require("url");
const websocket = require("ws");

var fileServer = new static.Server("./public");
var server = http.createServer((req, res) => {
    fileServer.serve(req, res);
})

var latestData = null;

server.listen(8000, () => {
    console.log("server listening on port 8000");
})

async function fetchMatchScore() {
    try {
        var response = await axios.get("https://api.cricapi.com/v1/currentMatches?apikey=5173e8c1-9895-4345-b064-3d74a080273c&offset=0");
        return response.data;
    } catch (err) {
        console.log(err)
    }
}

var wss = new websocket.Server({ server: server });
wss.on("connection", async (ws) => {
    var data = await fetchMatchScore();
    ws.send(JSON.stringify(data));
})

async function updateDataAndBroadcast() {
    latestData = await fetchMatchScore();
    if (latestData !== null) {
        wss.clients.forEach((client) => {
            if (client.readyState === websocket.OPEN) {
                client.send(JSON.stringify(latestData));
            }
        });
    }
}

// setInterval(updateDataAndBroadcast, 5000);