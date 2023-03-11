import "./styles.css";
import mulheresTreinando from "../../assets/mulheres-treinando.jpg";
import { Header } from "../../components/Header";

function Contato() {
  return (
    <>
      <Header />
      <div className="contato">
        <div className="titulo-lista">
          <h1>Entre em contato conosco!</h1>
          <ul>
            <li>Nosso número para contato: xx-xxxxxxxx</li>
            <li>Nos mande um Email: exemplo@email.com</li>
            <li>Nossa localização: Rua Brasil, 123</li>
            <li>Dias que estamos abertos: seg a sext</li>
            <li>Horários: 7h da manhã às 10h da noite</li>
          </ul>
        </div>
        <img src={mulheresTreinando} alt="mulheres treinando" />
      </div>
    </>
  );
}

export default Contato;
