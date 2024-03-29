import { LoginTemplate } from "../templates/loginTemplate";

function Login({ changeScreen }) {

  const onNicknameSubmit = (nickname) => {
    if(nickname && nickname.length > 0) {
      changeScreen(nickname)
    }
  }

  return (
    <LoginTemplate onSubmit={onNicknameSubmit} />
  );
}

export { Login };
