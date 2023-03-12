import "./styles.css";
import { Button } from "../Button";

export const Form = () => {
  return (
    <div className="container">
      <div className="titulo-cadastro">
        <h1>Cadastre-se:</h1>
      </div>
      <div className="formulario">
        <form>
          <label for="primeiro_nome">
            <strong>Nome:</strong>
          </label>
          <input type="text" className="nome" name="nome" />
          <label for="segundo_nome">
            <strong>Sobrenome:</strong>
          </label>
          <input type="text" className="nome" name="nome" />
          <label for="email">
            <strong>Email:</strong>
          </label>
          <input type="email" className="nome" name="nome" />
          <label for="senha">
            <strong>Senha:</strong>
          </label>
          <input type="password" className="nome" name="nome" />
          <label for="cpf">
            <strong>CPF:</strong>
          </label>
          <input type="text" className="nome" name="nome" />
          <label for="estado">
            <strong>Estado:</strong>
          </label>
          <input type="text" className="nome" name="nome" />
          <label for="cidade">
            <strong>Cidade:</strong>
          </label>
          <input type="text" className="nome" name="nome" />
          <label for="bairro">
            <strong>Bairro:</strong>
          </label>
          <input type="text" className="nome" name="nome" />
          <label for="rua">
            <strong>Rua:</strong>
          </label>
          <input type="text" className="nome" name="nome" />
          <label for="numero">
            <strong>Numero:</strong>
          </label>
          <input type="number" className="nome" name="nome" />
          <Button text="Cadastrar" disabled={false} />
        </form>
      </div>
    </div>
  );
};
