import { Outlet } from "react-router-dom";
import { Theme } from "./Shared/Components/Theme/style";
import Menu from "./Shared/Components/Menu";

const Layout = () => {
  return (
    <Theme>
        <Menu />
        <Outlet />
    </Theme>
  );
};

export default Layout;