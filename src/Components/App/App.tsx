import { FC } from "react";
import "./index.scss";
import "./App.scss";
import Header from "../Header";
import CreateTodo from "../CreateTodo";
import TodosContainer from "../TodosContainer";
import { useView } from "../../utils/hooks";
import Tabs from "../Tabs";

const App: FC = () => {
  const { theme } = useView();
  const media = document.body.clientWidth < 1024;

  return (
    <>
      <div className={`App ${theme}`}>
        <div className={`bg ${theme}`}></div>
        <div className="container">
          <Header />
          <CreateTodo />
          <TodosContainer />
          {media ? <Tabs classname={`mobile ${theme}`} /> : ""}
        </div>
      </div>
    </>
  );
};

export default App;
