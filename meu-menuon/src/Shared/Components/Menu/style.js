import styled from "styled-components";
import { breakpoints } from "../../Breakpoints";

const MenuContainer = styled.nav`
  background-color: transparent;
  position: fixed;
  width: 100%;

  .container-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.625rem;
    .container-links {
      display: none;
    }

    @media (width >= ${breakpoints.tablet}) {
      .container-links {
        display: block;
      }
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  @media (width >= ${breakpoints.tablet}) {
    width: 20%;
  }
  @media (width >= ${breakpoints.desktop}) {
    width: 15%;
  }
`;

const LogoImg = styled.img`
  width: 9.375rem;
  @media (width >= ${breakpoints.tablet}) {
    width: 12.5rem;
  }
  @media (width >= ${breakpoints.desktop}) {
    width: 12rem;
  }
`;

const ContainerLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    a {
      color: #fff;
      font-size: 1rem;
      font-weight: 500;
    }
  }
  @media (width >= ${breakpoints.desktop}) {
    flex-direction: row;
    gap: 2rem;
  }
`;

export { MenuContainer, LogoContainer, LogoImg, ContainerLinks };
