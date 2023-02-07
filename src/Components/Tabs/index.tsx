import { FC, MouseEventHandler } from "react";
import { useTodos, useView } from "../../utils/hooks";

import "./Tabs.scss";

interface IProps {
  classname: `mobile ${string}` | `desktop ${string}`;
}

const Tabs: FC<IProps> = ({ classname }) => {
  const { theme } = useView();
  const { filter, changeFilter } = useTodos();

  const clickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.currentTarget.dataset.active) {
      changeFilter(e.currentTarget.dataset.active);
    }
  };

  return (
    <div className={`filters ${theme} ${classname}`}>
      <div
        onClick={clickHandler}
        className={`tab ${filter === "All" ? "active" : ""}`}
        data-active={"All"}
      >
        All
      </div>
      <div
        onClick={clickHandler}
        className={`tab ${filter === "Active" ? "active" : ""}`}
        data-active={"Active"}
      >
        Active
      </div>
      <div
        onClick={clickHandler}
        className={`tab ${filter === "Completed" ? "active" : ""}`}
        data-active={"Completed"}
      >
        Completed
      </div>
    </div>
  );
};

export default Tabs;
