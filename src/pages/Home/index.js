import "./styles.css";
import { Header } from "../../components/Header";
import { Text } from "../../components/Text";
import botaoDuvida from "../../assets/icone-duvida.png";
import homemMalhando from "../../assets/man-g519e9def0_1280.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <Header />
      <Text />
      <div className="home-img">
        <img className="foto-homem" src={homemMalhando} alt="homem malhando" />
        <Link className="botao-duvida" to="/contato">
          <img src={botaoDuvida} alt="duvida" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
