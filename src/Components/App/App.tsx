import { FC, useContext } from "react";
import "./index.scss";
import "./App.scss";
import Header from "../Header";
import CreateTodo from "../CreateTodo/CreateTodo";
import TodoList from "../TodoList";
import { Context } from "../../utils/Context";

const App: FC = () => {
  const {
    view: { theme },
  } = useContext(Context);

  return (
    <>
      <div className={`App ${theme}`}>
        <div className={`bg ${theme}`}></div>
        <div className="container">
          <Header />
          <CreateTodo />
          <TodoList />
        </div>
      </div>
    </>
  );
};

export default App;
