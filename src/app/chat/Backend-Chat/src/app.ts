import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
// Configura Socket.io con la gestione CORS
const io = new Server(server, {
  cors: {
    origin: "http://localhost:4200", // Sostituisci con il tuo dominio Angular se è diverso
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('Un utente si è connesso.');

  socket.on('chat message', (msg: string) => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('Un utente si è disconnesso.');
  });
});

server.listen(3000, () => {
  console.log('Server in ascolto sulla porta 3000');
});
