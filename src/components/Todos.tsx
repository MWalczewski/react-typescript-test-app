import { Todo } from "../types/types";
import { Filtered_Todos_URL, Todos_URL } from "../mocks/URLs";
import { useAxiosGet } from "../hooks/useAxiosGet";

const Todos = () => {
  const [todos] = useAxiosGet<Todo[] | null>(`${Todos_URL}`, []);
  const [filteredTodos] = useAxiosGet<Todo[] | null>(
    `${Filtered_Todos_URL}`,
    []
  );

  return (
    <div>
      Todos
      <button onClick={() => console.log("todos: ", todos)}>
        todos console
      </button>
      <button onClick={() => console.log("filteredTodos: ", filteredTodos)}>
        filteredTodos console
      </button>
    </div>
  );
};

export default Todos;
