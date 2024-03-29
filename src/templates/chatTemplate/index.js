import './styles.css';

function ChatTemplate({nickname, onSubmit, posts}) {

  const _handleSubmit = (e) => {
    e.preventDefault()
    if(e.target[0].value && e.target[0].value.length > 10) {
      onSubmit(e.target[0].value)
      e.target.reset()
    } else {
      alert("Seu post deve conter no mínimo 10 caracteres.")
    }
  }

  return (
    <div className="chat-body">
      <div className='chat-content'>
      <h1 className='chat-title'>Fórum SDE</h1>
      <p>Seja bem vindo, {nickname}</p>
      <form className="flex-row" onSubmit={_handleSubmit}>
        <input type="text" placeholder={`No que você está pensando hoje, ${nickname}?`} required />
        <button className="login">Postar</button>
      </form>
      <div className='messages'>
        {
          posts.map((item, i) => (
            <div className="message-content" key={String(i)}>
              <p className="nickname">{item.nickname}</p>
              <p className="message-text">{item.message}</p>
            </div>
          ))
        }
      </div>
      </div>
    </div>
  );
}

export { ChatTemplate };
