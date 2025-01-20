import "./styles.scss";

type TodoFilterTypes = {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

export const TodoFilter = ({ setFilter }: TodoFilterTypes) => {
  return (
    <div className="todo-filter">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("checked")}>Checked</button>
      <button onClick={() => setFilter("unchecked")}>Unchecked</button>
    </div>
  );
};
