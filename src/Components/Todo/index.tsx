import { FC, useState } from "react";
import { ITodo } from "../../utils/interfaces";
import "./Todo.scss";

interface IProps {
  todo: ITodo;
}

const Todo: FC<IProps> = ({ todo }) => {
  const [checked, setChecked] = useState(todo.checked);

  const changeHandler = () => {
    setChecked((state) => !state);
  };

  return (
    <section className={`todo ${checked ? "completed" : ""}`}>
      <div className="body">
        <input
          className="custom-checkbox"
          type="checkbox"
          checked={checked}
          id={`checkbox-${todo.id}`}
          value="complete"
          onChange={changeHandler}
        />
        <label htmlFor={`checkbox-${todo.id}`}></label>
        <p onClick={changeHandler}>{todo.title}</p>
      </div>
      <div className="closing">
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </section>
  );
};

export default Todo;
