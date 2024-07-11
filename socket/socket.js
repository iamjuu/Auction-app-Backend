// socket.js
const { Server } = require('socket.io');

const initializeSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"]
    }
  });

  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });

    // Example event listener
    socket.on('exampleEvent', (data) => {
      console.log('Received data:', data);
      // Handle the event here
    });

    // Example event emitter
    socket.emit('exampleEvent', { message: 'Hello from server' });
  });
};

module.exports = initializeSocket;
