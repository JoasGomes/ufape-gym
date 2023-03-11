import { Button } from "../Button";
import "./styles.css";
import imagemHaltere from "../../assets/icons8-haltere-64.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="imagem">
        <Link to="/">
          <img src={imagemHaltere} alt="haltere" />
        </Link>
      </div>
      <div className="botoes">
        <Button text={"Login"} disabled={false} />
        <Button text={"Cadastre-se"} disabled={false} />
      </div>
    </header>
  );
};
