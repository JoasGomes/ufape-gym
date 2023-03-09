import "./App.css";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import homemMalhando from "./assets/man-g519e9def0_1280.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="home-img">
        <img src={homemMalhando} alt="homem malhando" />
      </div>
      <Form />
    </div>
  );
}

export default App;
