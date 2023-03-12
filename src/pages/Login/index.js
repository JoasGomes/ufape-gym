import "./styles.css";
import { HeaderNoBtn } from "../../components/HeaderNoBtn";

function Login() {
  return (
    <div className="login">
      <HeaderNoBtn />
      <div className="container-login">
        <div className="titulo-login">
          <h1>Login:</h1>
        </div>
        <form>
          <label for="usuario">
            <strong>Usuário:</strong>
          </label>
          <input type="text" name="login" />
          <label for="senha">
            <strong>Senha:</strong>
          </label>
          <input type="password" name="senha" />
        </form>
      </div>
    </div>
  );
}

export default Login;
