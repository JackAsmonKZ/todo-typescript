export type TodoType = {
  id: number;
  title: string;
  checked: boolean;
};

export type SetTodosType = React.Dispatch<React.SetStateAction<TodoType[]>>;
