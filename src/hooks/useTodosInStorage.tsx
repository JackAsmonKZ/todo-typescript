import { useEffect } from "react";
import { SetTodosType, TodoType } from "../types";

type UseTodosInStorageType = {
  todos: TodoType[];
  setTodos: SetTodosType;
};

export const useTodosInStorage = ({
  todos,
  setTodos,
}: UseTodosInStorageType) => {
  useEffect(() => {
    const todosInStorage = localStorage.getItem("todos");
    if (todosInStorage) {
      setTodos(JSON.parse(todosInStorage));
    }
  }, []);

  useEffect(() => {
    if (todos.length) {
      localStorage.setItem("todos", JSON.stringify(todos));
    } else if (localStorage.getItem("todos")) {
      localStorage.removeItem("todos");
    }
  }, [todos]);
};
