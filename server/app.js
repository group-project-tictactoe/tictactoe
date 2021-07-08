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

io.on('connect', (socket) => {
  console.log('connected');

  socket.on('fill', (id) => {
    console.log(id);
    socket.broadcast.emit('fillBack', id);
  });

  socket.on('replay', () => {
    socket.broadcast.emit('replayBack');
  });
});

http.listen(PORT, () => console.log(`listening on port ${PORT}`));
