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
            <li>
              <strong>Nosso número para contato:</strong> xx-xxxxxxxx
            </li>
            <li>
              <strong>Nos mande um Email:</strong> exemplo@email.com
            </li>
            <li>
              <strong>Nossa localização:</strong> Rua Brasil, 123
            </li>
            <li>
              <strong>Dias que estamos abertos:</strong> seg a sext
            </li>
            <li>
              <strong>Horários:</strong> 7h da manhã às 10h da noite
            </li>
          </ul>
        </div>
        <img src={mulheresTreinando} alt="mulheres treinando" />
      </div>
    </>
  );
}

export default Contato;
