import { useEffect, useRef, useState } from "react";
import "./styles.scss";
import { SetTodosType, TodoType } from "../../types";

export const TodoCreate = ({ setTodos }: { setTodos: SetTodosType }) => {
  const [title, setTitle] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleCreate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleCreateClick = () => {
    if (title.trim() !== "") {
      setTodos((prev: TodoType[]) => [
        ...prev,
        { id: Date.now(), title: title, checked: false },
      ]);
    } else {
      alert("Please enter a title");
    }
    setTitle("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCreateClick();
    }
  };

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  return (
    <div className="todo-create">
      <div className="todo-create-title">TodoCreate</div>
      <input
        className="todo-create-input"
        type="text"
        onChange={handleCreate}
        value={title}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      <button onClick={handleCreateClick}>Create</button>
    </div>
  );
};
