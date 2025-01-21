import { useEffect, useState } from "react";
import "./App.scss";
import { Header, TodoCreate, TodoFilter, TodoList } from "./components";
import { TodoType } from "./types";
import { useTodosInStorage } from "./hooks/useTodosInStorage";

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [filter, setFilter] = useState<string>("all");

  useTodosInStorage({ todos, setTodos });

  return (
    <>
      <Header />
      <TodoCreate setTodos={setTodos} />
      <TodoFilter setFilter={setFilter} />
      <TodoList todos={todos} setTodos={setTodos} filter={filter} />
    </>
  );
}

export default App;
