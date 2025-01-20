import { useMemo } from "react";
import "./styles.scss";

import { TodoItem } from "./TodoItem/TodoItem";
import { SetTodosType, TodoType } from "../../types";

type TodoListTypes = {
  todos: TodoType[];
  setTodos: SetTodosType;
  filter: string;
};

export const TodoList = ({ todos, setTodos, filter }: TodoListTypes) => {
  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filter === "checked") return todo.checked;
      if (filter === "unchecked") return !todo.checked;
      return true;
    });
  }, [todos, filter]);

  return (
    <div className="todo-list">
      <h2>TodoList</h2>
      <ul className="todo-item-list">
        {filteredTodos.map((todo) => (
          <TodoItem todo={todo} setTodos={setTodos} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};
