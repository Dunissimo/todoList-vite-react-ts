import { FC, MouseEventHandler, useContext, useState } from "react";
import { Context } from "../../utils/Context";

const Tabs: FC = () => {
  const {
    todos: { filter, changeFilter },
  } = useContext(Context);

  const clickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.currentTarget.dataset.active) {
      changeFilter(e.currentTarget.dataset.active);
    }
  };

  return (
    <div className="filters">
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
