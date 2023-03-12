import "./styles.css";
import { HeaderNoBtn } from "../../components/HeaderNoBtn";

function Login() {
  return (
    <div className="login">
      <HeaderNoBtn />
      <div className="container-login">
        <form>
          <label for="usuario">Usuário:</label>
          <input type="text" name="login" />
          <label for="senha">Senha:</label>
          <input type="password" name="senha" />
        </form>
      </div>
    </div>
  );
}

export default Login;
