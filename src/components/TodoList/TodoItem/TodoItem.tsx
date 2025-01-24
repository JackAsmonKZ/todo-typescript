import { useForm, SubmitHandler } from "react-hook-form";
import { SetTodosType, TodoType } from "../../../types";
import "./styles.scss";
import { useState } from "react";
import { ThreeBox } from "../../ThreeBox/ThreeBox";

type TodoItemType = {
  todo: TodoType;
  setTodos: SetTodosType;
  isEvenTodo: boolean;
};

type Inputs = {
  todoTitle: string;
};

export const TodoItem = ({ todo, setTodos, isEvenTodo }: TodoItemType) => {
  const { id, title, checked } = todo;
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const [isEditing, setIsEditing] = useState(false);

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

  const onSubmit: SubmitHandler<Inputs> = (newTodoName) => {
    setTodos((prev) => {
      return prev.map((item) =>
        item.id === id ? { ...item, title: newTodoName.todoTitle } : item
      );
    });
    reset();
    setIsEditing(false);
  };

  return (
    <>
      <li className="todo-item">
        <div className="todo-wrapper">
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckbox}
            className="todo-item-checkbox"
          />
          <div className="todo-item-title">{title}</div>
          <button onClick={() => setIsEditing((prev) => !prev)}>Edit</button>
          <button className="todo-item-delete" onClick={deleteTodo}>
            Delete
          </button>
          <ThreeBox checked={checked} isEvenBox={isEvenTodo} />
        </div>
        <div className="todo-wrapper">
          {isEditing && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                style={{ marginRight: "10px" }}
                {...register("todoTitle")}
                placeholder="New title"
              />
              <button>Go</button>
            </form>
          )}
        </div>
      </li>
    </>
  );
};
