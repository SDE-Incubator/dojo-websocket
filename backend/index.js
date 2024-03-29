import { Server } from 'socket.io'

const io = new Server({
  cors: {
    origin: "http://localhost:3000"
  }
});

const posts = []

function sendAllPosts(connectedUserSocket) {
  connectedUserSocket.emit("all-posts", posts)
}

function receiveNewPost(post) {
  posts.unshift(post)
  sendNewPost(post)
}

function sendNewPost(post) {
  io.emit('new-post', post)
}

io.on('connection', (connectedUserSocket) => {
  sendAllPosts(connectedUserSocket)
  connectedUserSocket.on('send-post', receiveNewPost)
});

io.listen(3333);