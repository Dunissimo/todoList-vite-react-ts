import { FC } from "react";
import { useTodos, useView } from "../../utils/hooks";
import Todo from "../Todo";
import "./TodoList.scss";

const TodoList: FC = () => {
  const { theme } = useView();
  const { list, filter } = useTodos();

  const renderData = () => {
    const noData = (
      <section className={`todo-list`}>
        <div className={`todo ${theme}`}>
          <p>There are no tasks yet</p>
        </div>
      </section>
    );

    const haveData = list
      .filter((todo) => {
        switch (filter) {
          case "All":
            return todo;
          case "Active":
            return !todo.checked;
          case "Completed":
            return todo.checked;
          default:
            return todo;
        }
      })
      .map((todo) => <Todo key={todo.id} todo={todo} />);

    if (haveData.length) {
      return haveData;
    } else {
      return noData;
    }
  };

  return <div>{renderData()}</div>;
};

export default TodoList;
