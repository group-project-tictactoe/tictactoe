const express = require('express');
const app = express();
const PORT = 3000;

const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: '*',
  },
});

const cors = require('cors');
app.use(cors());
let totalPlayer = 0
let player = {
  player1: '',
  player2: ''
}

io.on('connect', (socket) => {
  console.log('connected');

  io.emit('totalPlayer', totalPlayer, player)

  socket.on('startGame', (playerName) => {
    totalPlayer++  
    if (totalPlayer == 1) {
      player.player1 = playerName
    } else if (totalPlayer > 1) {
      player.player2 = playerName
    }
    io.emit('totalPlayer', totalPlayer, player)
  })

  socket.on('exitGame', () => {
    totalPlayer = 0
    io.emit('totalPlayer', totalPlayer)
  })

  socket.on('fill', (id) => {
    socket.broadcast.emit('fillBack', id);
  });

  socket.on('replay', () => {
    socket.broadcast.emit('replayBack');
  });
});

http.listen(PORT, () => console.log(`listening on port ${PORT}`));
