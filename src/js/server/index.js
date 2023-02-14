const express = require("express");
const { WebSocketServer } = require("ws");
const app = express();
const server = new WebSocketServer({ port: 7747 });
const port = 6646

server.on('connection', (ws) => {
    ws.on('error', console.error);
    console.log('user joined!!!');
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})