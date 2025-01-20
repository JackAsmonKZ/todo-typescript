import { useState } from "react";
import "./App.scss";
import { Header, TodoCreate, TodoFilter, TodoList } from "./components";
import { TodoType } from "./types";

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [filter, setFilter] = useState<string>("all");

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
