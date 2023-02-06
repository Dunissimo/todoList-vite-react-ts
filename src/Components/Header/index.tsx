import { FC, useContext } from "react";
import "./Header.scss";
import moon from "../../assets/images/icon-moon.svg";
import sun from "../../assets/images/icon-sun.svg";
import { Context } from "../../utils/Context";

const Header: FC = () => {
  const {
    view: { theme, toggleTheme },
  } = useContext(Context);
  return (
    <header className="header">
      <h1>TODO</h1>
      <button onClick={toggleTheme}>
        <img src={theme === "light" ? moon : sun} alt="" />
      </button>
    </header>
  );
};

export default Header;
