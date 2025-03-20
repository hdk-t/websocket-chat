import { IncomingMessage, ServerResponse } from "http";

const fs = require("fs");
const http = require("http");

const server = http.createServer((request: IncomingMessage, response: ServerResponse) => {
    fs.readFile("/opt/frontend/www/index.html", "utf-8", (error: Error|null, data: string) => {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
    });
});

// HTTPサーバー起動
server.listen(8080, () => {
    console.log("WebSocket Chat frontend is running on port 80");
});
