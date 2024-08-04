import { Link } from "react-router-dom";
import { LogoContainer, LogoImg } from './style'
import LogoMenu from "../../../assets/imgs/logo-transparent.png";

const Logo = () => {
    return ( 
        <LogoContainer>
          <Link to="/">
            <LogoImg src={LogoMenu} alt="logo meu-menuon"/>
          </Link>
        </LogoContainer>
    );
};

export default Logo;