import { useContext } from "react";
import { ViewContext } from "../context/ViewContext";
import { TodosContext } from "../context/TodosContext";

export const useView = () => useContext(ViewContext);

export const useTodos = () => useContext(TodosContext);
