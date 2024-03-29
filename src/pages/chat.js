import { useEffect, useState } from "react";
import { ChatTemplate } from "../templates/chatTemplate";
import { socket } from "../config/socket";

function Chat({ nickname }) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    socket.connect()
    return () => {
      socket.disconnect()
    }
  }, [])

  const sendNewPost = (message) => {
  }


  return (
    <ChatTemplate nickname={nickname} posts={posts} onSubmit={sendNewPost}/>
  );
}

export { Chat };
