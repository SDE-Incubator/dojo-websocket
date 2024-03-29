import './styles.css';

function LoginTemplate({onSubmit}) {

  const _handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(e.target[0].value)
  }

  return (
    <div className="login-content">
      <div className="flex-div">
        <div className="name-content">
          <h1 className="logo">Fórum SDE</h1>
          <p>Se conecte em tempo real com os desenvolvedores da SDE Incubator.</p>
        </div>
          <form onSubmit={_handleSubmit} className='login-form'>
            <h2>Escolha um apelido</h2>
            <br></br>
            <input type="text" placeholder="Apelido" required />
            <button className="login">Entrar</button>
            <hr/>
          </form>
      </div>
    </div>
  );
}

export { LoginTemplate };
