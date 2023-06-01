import { FC } from "react";
import Header from "../Header";
import CreateTodo from "../CreateTodo";
import TodosContainer from "../TodosContainer";
import Tabs from "../Tabs";
import TodosContextProvider from "../../context/TodosContext";
import { useRezise, useView } from "../../utils/hooks";

import "./index.scss";
import "./App.scss";

const App: FC = () => {
  const { theme } = useView();
  const media = useRezise() < 1024;

  return (
    <div className={`App ${theme}`}>
      <div className={`bg ${theme}`}></div>
      <div className="container">
        <Header />

        <TodosContextProvider>
          <CreateTodo />
          <TodosContainer />
          {media && <Tabs classname={`mobile ${theme}`} />}
        </TodosContextProvider>
      </div>

      {media || <p className="tip">Drag and drop to reorder list</p>}
    </div>
  );
};

export default App;
