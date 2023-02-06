import { FC, useContext } from "react";
import { Context } from "../../utils/Context";
import { ITodo } from "../../utils/interfaces";
import Todo from "../Todo";
import "./TodoList.scss";

const TodoList: FC = () => {
  const {
    view: { theme },
    todos: { list, deleteAllTodos },
  } = useContext(Context);

  const noData = (
    <section className={`todo-list`}>
      <div className={`todo ${theme}`}>
        <p>There are no tasks yet</p>
      </div>
    </section>
  );

  const haveData = list.map((todo) => <Todo key={todo.id} todo={todo} />);
  return (
    <section className={`todo-list`}>
      {list.length < 1 ? noData : haveData}
      <div className="params">
        <div className={`todo ${theme}`}>
          <p>{list.filter((todo) => !todo.checked).length} items left</p>
          <div className="filters">
            <div className="tab active">All</div>
            <div className="tab">Active</div>
            <div className="tab">Completed</div>
          </div>
          <div className="clear" onClick={deleteAllTodos}>
            <button>Clear Completed</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoList;
