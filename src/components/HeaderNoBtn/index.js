import "./styles.css";
import imagemHaltere from "../../assets/icons8-haltere-64.png";
import { Link } from "react-router-dom";

export const HeaderNoBtn = () => {
  return (
    <header className="header">
      <div className="imagem">
        <Link to="/">
          <img src={imagemHaltere} alt="haltere" />
        </Link>
      </div>
    </header>
  );
};
