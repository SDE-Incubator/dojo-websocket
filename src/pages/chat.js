import { useEffect, useState } from "react";
import { ChatTemplate } from "../templates/chatTemplate";
import { socket } from "../config/socket";

function Chat({ nickname }) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    socket.connect()

    function onAllPosts(posts) {
      setPosts(posts)
    }

    function onNewPost(newPost) {
      setPosts(oldPosts => [newPost, ...oldPosts])
    }

    socket.on("all-posts", onAllPosts)
    socket.on("new-post", onNewPost)

    return () => {
      socket.disconnect()
      socket.off("all-posts", onAllPosts)
      socket.off("new-post", onNewPost)
    }
  }, [])

  const sendNewPost = (message) => {
    socket.emit("send-post", { nickname, message })
  }


  return (
    <ChatTemplate nickname={nickname} posts={posts} onSubmit={sendNewPost}/>
  );
}

export { Chat };
