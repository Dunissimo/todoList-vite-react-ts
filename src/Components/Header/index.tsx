import { FC } from "react";
import "./Header.scss";
import moon from "../../assets/images/icon-moon.svg";

const Header: FC = () => {
  return (
    <header className="header">
      <h1>TODO</h1>
      <button>
        <img src={moon} alt="" />
      </button>
    </header>
  );
};

export default Header;
