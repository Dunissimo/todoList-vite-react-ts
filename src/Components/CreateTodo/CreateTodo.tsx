import { FC } from "react";
import "./CreateTodo.scss";

const CreateTodo: FC = () => {
  return (
    <section className="create-todo">
      <input
        className="custom-checkbox"
        type="checkbox"
        id="checkbox-main"
        value="complete"
      />
      <label htmlFor="checkbox-main"></label>
      <input type="text" placeholder="Create a new todo..." />
    </section>
  );
};

export default CreateTodo;
