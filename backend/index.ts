const Ws = require("ws");
const http = require("http");
const server = http.createServer();
const wss = new Ws.Server({ server });

// WebSocket接続
wss.on("connection", (ws: WebSocket) => {
    // メッセージ受信処理
    ws.onmessage = (event: MessageEvent) => {
        const json = JSON.parse(event.data);
        if (json.message === "" || json.message === null) {
            return;
        }
        // WebSocket 接続中のクライアント全員にメッセージ送信
        wss.clients.forEach((client: WebSocket) => {
            // 自分のメッセージか
            json.isMine = ws === client;
            if (client.readyState === WebSocket.OPEN) {
                // メッセージを送信
                client.send(JSON.stringify(json));
            }
        });
    };
});

// WebSocket用のHTTPサーバー起動
server.listen(3000, () => {
    console.log("WebSocket Chat backend is running on port 3000");
});
