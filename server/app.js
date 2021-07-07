const express = require('express')
const app = express()
const PORT = 3000

const http = require('http').createServer(app)
const io = require('socket.io')(http, {
  cors: {
    origin: '*'
  }
})

const cors = require('cors')
app.use(cors())

io.on('connect', (socket) => {
  console.log('connected');
})

http.listen(PORT, () => console.log(`listening on port ${PORT}`))