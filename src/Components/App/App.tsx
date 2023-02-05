import { FC } from "react";
import "./index.scss";
import "./App.scss";
import Header from "../Header";
import CreateTodo from "../CreateTodo/CreateTodo";
import TodoList from "../TodoList";

const App: FC = () => {
  return (
    <div className="App">
      <div className="bg"></div>
      <div className="container">
        <Header />
        <CreateTodo />
        <TodoList
          list={[
            {
              checked: false,
              title: "Create Todo List",
              id: Math.random() * 100,
            },
            {
              checked: false,
              title: "Read for 1 hour",
              id: Math.random() * 100,
            },
            {
              checked: false,
              title: "Learn Vite + Typescript",
              id: Math.random() * 100,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default App;
