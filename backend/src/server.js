const http = require('http');
const express = require('express');
const cors = require('cors');
const { Server } = require('socket.io');
const env = require('./config/env');
const routes = require('./routes');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: env.corsOrigin } });

app.use(cors({ origin: env.corsOrigin }));
app.use(express.json());
app.use('/api', routes);

io.on('connection', (socket) => {
  socket.on('join:match', (matchId) => {
    socket.join(`match:${matchId}`);
  });

  socket.on('message:send', ({ matchId, senderId, content }) => {
    io.to(`match:${matchId}`).emit('message:new', {
      matchId,
      senderId,
      content,
      createdAt: new Date().toISOString()
    });
  });
});

server.listen(env.port, () => {
  console.log(`Backend running on http://localhost:${env.port}`);
});
