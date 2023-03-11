import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from "./pages/Contato";
import Erro from "./pages/Erro";
import Home from "./pages/Home";
import Produto from "./pages/Produto";
import Usuario from "./pages/Usuario";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/usuario" element={<Usuario />} />

        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
};
