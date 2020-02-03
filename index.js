const express = require('express')
const http = require('http')
const socketIo = require('socket.io')


const app = express()
const server = http.createServer(app)
const io = socketIo(server);

app.set('port', process.env.POR || 5000)

io.on('connection', socket => {
  socket.on('message', message => {
    console.log('message server *****', message)
    socket.broadcast.emit('message', {
        body: message.body,
        from: message.from,
        time: message.time
      })
  })
})

server.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
