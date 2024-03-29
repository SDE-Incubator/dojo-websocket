import { Server } from 'socket.io'

const io = new Server({
  cors: {
    origin: "http://localhost:3000"
  }
});

io.on('connection', (connectedUserSocket) => {
  
});

io.listen(3333);