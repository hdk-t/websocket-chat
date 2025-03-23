# websoket-chat
SocketIOを利用した、シンプルなチャットアプリ

# 使用方法
## 初期設定
### コンテナを起動
- `docker-compose up -d`

### ライブラリをインストール
- `docker exec -it websocket-chat_app_1 bash -c "cd ./backend && npm install"`
- `docker exec -it websocket-chat_app_1 bash -c "cd ./frontend && npm install"`

### Backend WebSocketサーバーを起動
- `docker exec -it websocket-chat_app_1 bash -c "ts-node ./backend/index.ts"`

### Frontend HTTPサーバーを起動
- `docker exec -it websocket-chat_app_1 bash -c "ts-node ./frontend/index.ts"`

## forever(プロセス監視)でサーバーを起動
- `docker exec -it websocket-chat_app_1 bash -c "forever start -c ts-node ./frontend/index.ts && forever start -c ts-node ./backend/index.ts"`
