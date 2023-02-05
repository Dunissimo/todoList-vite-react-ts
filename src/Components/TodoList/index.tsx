import { FC } from "react";
import { ITodo } from "../../utils/interfaces";
import Todo from "../Todo";
import "./TodoList.scss";

interface IProps {
  list: ITodo[];
}

const TodoList: FC<IProps> = ({ list }) => {
  return (
    <section className="todo-list">
      {list.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
      <div className="params">
        <div className="todo">
          <p>{list.filter((todo) => !todo.checked).length} items left</p>
          <div className="filters">
            <div className="tab active">All</div>
            <div className="tab">Active</div>
            <div className="tab">Completed</div>
          </div>
          <div className="clear">
            <button>Clear Completed</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoList;
