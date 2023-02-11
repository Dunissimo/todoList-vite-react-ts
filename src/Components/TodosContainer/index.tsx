import { FC } from "react";
import { useTodos, useView } from "../../utils/hooks";
import Tabs from "../Tabs";
import Todo from "../Todo";
import TodoList from "../TodoList";
import "./TodoContainer.scss";

const TodosContainer: FC = () => {
  const { theme } = useView();
  const { list, deleteAllTodos } = useTodos();

  const media = document.body.clientWidth < 1024;

  return (
    <section className={`todo-list`}>
      <TodoList />
      <div className="params">
        <div className={`todo params ${theme}`}>
          <p>{list.filter((todo) => !todo.checked).length} items left</p>
          {media ? "" : <Tabs classname={`desktop ${theme}`} />}
          <div className="clear" onClick={deleteAllTodos}>
            <button>Clear Completed</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodosContainer;
