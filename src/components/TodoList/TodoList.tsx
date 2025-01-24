import { useEffect, useState } from "react";
import "./styles.scss";

import { TodoItem } from "./TodoItem/TodoItem";
import { SetTodosType, TodoType } from "../../types";
import { useFilteredTodo } from "../../hooks/useFilteredTodo";

type TodoListTypes = {
  todos: TodoType[];
  setTodos: SetTodosType;
  filter: string;
};

export const TodoList = ({ todos, setTodos, filter }: TodoListTypes) => {
  const filteredTodos = useFilteredTodo({ todos, filter });

  return (
    <div className="todo-list">
      <h2>TodoList</h2>
      <ul className="todo-item-list">
        {filteredTodos.map((todo, index) => (
          <TodoItem
            todo={todo}
            isEvenTodo={index % 2 === 0}
            setTodos={setTodos}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};
