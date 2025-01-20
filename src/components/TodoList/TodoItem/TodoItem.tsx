import { SetTodosType, TodoType } from "../../../types";
import "./styles.scss";

type TodoItemType = {
  todo: TodoType;
  setTodos: SetTodosType;
};

export const TodoItem = ({ todo, setTodos }: TodoItemType) => {
  const { id, title, checked } = todo;

  const handleCheckbox = () => {
    setTodos((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      })
    );
  };

  const deleteTodo = () => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckbox}
        className="todo-item-checkbox"
      />
      <div className="todo-item-title">{title}</div>
      <button className="todo-item-delete" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  );
};
