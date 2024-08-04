import { Link } from "react-router-dom";
import { ContainerLinks } from "./style";

const Links = () => {
  return (
    <nav aria-label="Main navigation">
      <ContainerLinks>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/vantagens">Nossas Vantagens</Link>
        </li>
        <li>
          <Link to="/planos">Planos</Link>
        </li>
        <li>
          <Link to="/otimizacao-redes-sociais">
            Precisa otimizar suas redes sociais?
          </Link>
        </li>
        <li>
          <Link to="/testemunhos">Testemunhos</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ContainerLinks>
    </nav>
  );
};

export default Links;
