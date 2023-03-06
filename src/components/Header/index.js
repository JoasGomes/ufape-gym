import { Button } from "../Button";
import "./styles.css";
import imagemHaltere from "../../assets/icons8-haltere-64.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="imagem">
        <img src={imagemHaltere} alt="haltere" />
      </div>
      <div className="botoes">
        <Button text={"Login"} disabled={false} />
        <Button text={"Cadastre-se"} disabled={false} />
      </div>
    </header>
  );
};
