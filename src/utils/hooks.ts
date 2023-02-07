import { useContext } from "react";
import { Context } from "./Context";

export const useView = () => {
  const { view } = useContext(Context);
  return view;
};
export const useTodos = () => {
  const { todos } = useContext(Context);
  return todos;
};
