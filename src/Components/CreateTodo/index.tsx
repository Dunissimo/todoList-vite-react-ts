import { ChangeEventHandler, FC, FormEventHandler, useState } from "react";
import { useTodos, useView } from "../../utils/hooks";

import "./CreateTodo.scss";

const CreateTodo: FC = () => {
  const { theme } = useView();
  const { addTodo } = useTodos();

  const [title, setTitle] = useState("");
  const [checked, setChecked] = useState(false);

  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();
    setTitle("");

    addTodo({ id: Math.random() * 100, title, checked });
  };

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.id === "checkbox-main") {
      setChecked(e.target.checked);
    } else {
      setTitle(e.target.value);
    }
  };

  return (
    <section className={`create-todo ${theme}`}>
      <form action="" onSubmit={submitHandler}>
        <input
          className="custom-checkbox"
          type="checkbox"
          id="checkbox-main"
          onChange={changeHandler}
        />
        <label htmlFor="checkbox-main"></label>
        <input
          type="text"
          value={title}
          onChange={changeHandler}
          placeholder="Create a new todo..."
        />
      </form>
    </section>
  );
};

export default CreateTodo;
