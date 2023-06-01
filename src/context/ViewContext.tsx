import { createContext, FC, useState } from "react";
import { IViewContext } from "../utils/interfaces";

const initialCtx: IViewContext = {
  theme: "dark",
  toggleTheme: () => {},
};

export const ViewContext = createContext(initialCtx);

interface IProps {
  children: React.ReactNode;
}

const ThemeContextProvider: FC<IProps> = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  const ctx = {
    theme,
    toggleTheme,
  };

  return <ViewContext.Provider value={ctx}>{children}</ViewContext.Provider>;
};

export default ThemeContextProvider;
