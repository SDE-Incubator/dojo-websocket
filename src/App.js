import { useState } from 'react';
import './App.css';
import { Login } from './pages/login';
import { Chat } from './pages/chat';

function App() {
  const [nickname, setNickname] = useState(null)

  const handleLogin = (nickname) => {
    setNickname(nickname)
  }

  return (
    <>
      {
        nickname ? <Chat nickname={nickname}/> : <Login changeScreen={handleLogin}/>
      }
    </>
  );
}

export default App;
