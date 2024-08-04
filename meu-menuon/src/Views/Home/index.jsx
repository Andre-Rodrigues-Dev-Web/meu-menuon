import React from "react";
import { Col, Container, Row } from "../../Shared/Components/Grids/style";
import { BannerHome } from "./style";

const Home = () => {
  return (
    <BannerHome>
      <Container>
        <Row>
          <Col colValue={6}>
            <h1>Meu MenuOn: Revolucione o Seu Cardápio</h1>
            <p>
              Transforme a experiência dos seus clientes com nosso cardápio
              digital moderno e interativo.
            </p>
            <a href="http://" className="bt-whatsapp">Solicite hoje mesmo</a>
          </Col>
          <Col colValue={6}></Col>
        </Row>
      </Container>
    </BannerHome>
  );
};

export default Home;
