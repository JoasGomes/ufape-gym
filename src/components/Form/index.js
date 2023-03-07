import { Button } from "../Button";
import "./styles.css";

export const Form = () => {
  return (
    <>
      <div className="titulo-cadastro">
        <h1>Cadastre-se:</h1>
      </div>
      <div className="formulario">
        <form>
          <label for="primeiro_nome">Nome:</label>
          <input type="text" className="nome" name="nome" />
          <label for="segundo_nome">Sobrenome:</label>
          <input type="text" className="nome" name="nome" />
          <label for="email">Email:</label>
          <input type="email" className="nome" name="nome" />
          <label for="senha">Senha:</label>
          <input type="password" className="nome" name="nome" />
          <label for="cpf">CPF:</label>
          <input type="text" className="nome" name="nome" />
          <label for="cpf">Cidade:</label>
          <input type="text" className="nome" name="nome" />
          <label for="cpf">Bairro:</label>
          <input type="text" className="nome" name="nome" />
          <label for="cpf">Rua:</label>
          <input type="text" className="nome" name="nome" />
          <label for="cpf">Numero:</label>
          <input type="number" className="nome" name="nome" />
          <div className="btn">
            <Button text={"Cadastrar"} disabled={false} />
          </div>
        </form>
      </div>
    </>
  );
};
