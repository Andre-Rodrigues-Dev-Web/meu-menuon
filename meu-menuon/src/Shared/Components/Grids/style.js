import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  width: 99%;
  @media (width >= 768px) {
    width: 90%;
  }
`;

const getWidthGrid = (size) => {
  if (!size) return;
  let width = (size / 12) * 100;
  return `width: ${width}%;`;
};

const Col = styled.div`
  padding: 0 15px;
  @media (width >= 768px) {
    ${({ colValue }) => colValue && getWidthGrid(colValue)}
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  @media (width >= 768px) {
    flex-direction: row;
  }
`;

export { Container, Col, Row };
