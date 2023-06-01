import { FC } from "react";
import { useView } from "../../utils/hooks";

import moon from "../../assets/images/icon-moon.svg";
import sun from "../../assets/images/icon-sun.svg";

import "./Header.scss";

const Header: FC = () => {
  const { theme, toggleTheme } = useView();

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
