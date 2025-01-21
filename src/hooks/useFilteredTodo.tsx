import { useMemo } from "react";
import { TodoType } from "../types";

type UseFilterTodoTypes = {
  todos: TodoType[];
  filter: string;
};

export const useFilteredTodo = ({ todos, filter }: UseFilterTodoTypes) => {
  return useMemo(() => {
    return todos.filter((todo: TodoType) => {
      if (filter === "checked") return todo.checked;
      if (filter === "unchecked") return !todo.checked;
      return true;
    });
  }, [todos, filter]);
};
