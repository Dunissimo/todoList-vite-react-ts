import { ChangeEventHandler, DragEventHandler, FC } from "react";
import { useTodos, useView } from "../../utils/hooks";
import { ITodo } from "../../utils/interfaces";

import "./Todo.scss";

interface IProps {
  todo: ITodo;
}

const Todo: FC<IProps> = ({ todo }) => {
  const { theme } = useView();
  const { changeCheckedStatus, deleteTodo } = useTodos();

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    changeCheckedStatus(todo.id, e.target.checked);
  };
  const clickHandler = () => {
    changeCheckedStatus(todo.id, !todo.checked);
  };
  const deleteHandler = () => {
    deleteTodo(todo.id);
  };
  const dragStartHandler: DragEventHandler<HTMLElement> = (e) => {
    e.currentTarget.style.opacity = "0.5";

    setCurrentTodo(todo);
  };
  const dragEnterHandler: DragEventHandler<HTMLElement> = (e) => {
    const currentIndex = todos.findIndex((todo) => todo.id === currentTodo?.id);
    const index = todos.findIndex(
      (todo) => todo.id === Number(e.currentTarget.dataset.id)
    );

    const newArr = [...todos];

    [newArr[currentIndex], newArr[index]] = [
      newArr[index],
      newArr[currentIndex],
    ];

    updateTodos(newArr);
  };
  const dragEndHandler: DragEventHandler<HTMLElement> = (e) => {
    e.currentTarget.style.opacity = "1";
    setCurrentTodo(null);
  };

  const { currentTodo, setCurrentTodo, todos, updateTodos } = useTodos();

  return (
    <section
      onDragStart={dragStartHandler}
      onDragEnter={dragEnterHandler}
      onDragEnd={dragEndHandler}
      draggable
      data-id={todo.id}
      className={`todo ${todo.checked ? "completed" : ""} ${theme}`}
    >
      <div className="body">
        <input
          className="custom-checkbox"
          type="checkbox"
          checked={todo.checked}
          id={`checkbox-${todo.id}`}
          value="complete"
          onChange={changeHandler}
        />
        <label htmlFor={`checkbox-${todo.id}`}></label>
        <p onClick={clickHandler}>{todo.title}</p>
      </div>
      <div className="closing" onClick={deleteHandler}>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </section>
  );
};

export default Todo;
