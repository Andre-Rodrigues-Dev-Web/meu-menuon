import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import Home from "./Views/Home";
import Erro from "./Views/Erro";
import SobreNos from "./Views/SobreNos";
import Contato from "./Views/Contato";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre-nos" element={<SobreNos />} />
        <Route path="contato" element={<Contato />} />
        <Route path="*" element={<Erro />} />
      </Route>
    </Routes>
  );
};

export default App;
