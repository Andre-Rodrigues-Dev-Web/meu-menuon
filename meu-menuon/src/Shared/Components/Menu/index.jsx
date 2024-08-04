import { MenuContainer } from "./style";
import Logo from "./Logo";
import Links from "./Links";

const Menu = () => {
  return (
    <MenuContainer>
      <div className="container-menu">
        <Logo />
        <div className="container-links">
          <Links />
        </div>
      </div>
    </MenuContainer>
  );
};

export default Menu;
