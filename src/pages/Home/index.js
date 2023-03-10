import "./styles.css";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { Text } from "../../components/Text";
import botaoDuvida from "../../assets/icone-duvida.png";
import homemMalhando from "../../assets/man-g519e9def0_1280.jpg";

function Home() {
  return (
    <div className="App">
      <Header />
      <Text />
      <div className="home-img">
        <img src={homemMalhando} alt="homem malhando" />
      </div>
      <div className="div-botao-duvida">
        <button className="botao-duvida">
          <img src={botaoDuvida} alt="duvida" />
        </button>
      </div>
      <Form />
    </div>
  );
}

export default Home;
