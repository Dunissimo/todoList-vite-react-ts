import { EventHandler, useContext, useEffect, useState } from "react";
import { ViewContext } from "../context/ViewContext";
import { TodosContext } from "../context/TodosContext";
import { ReactEventHandler } from "react";
import { UIEventHandler } from "react";

export const useView = () => useContext(ViewContext);

export const useTodos = () => useContext(TodosContext);

export const useRezise = () => {
  const [width, setWidth] = useState(document.body.clientWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(document.body.clientWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
};
