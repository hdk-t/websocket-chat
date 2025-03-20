# websoket-chat
SocketIOを利用した、シンプルなチャットアプリ

# 使用方法
## 初期設定
### コンテナを起動
- `docker-compose up -d`

### ライブラリをインストール
- `docker exec -it simple-chat_app_1 bash -c "cd ./backend && npm install"`
- `docker exec -it simple-chat_app_1 bash -c "cd ./frontend && npm install"`

### WebSocketサーバーを起動
- `docker exec -it simple-chat_app_1 bash -c "ts-node ./backend/index.ts"`

### HTTPサーバーを起動
- `docker exec -it simple-chat_app_1 bash -c "ts-node ./frontend/index.ts"`
