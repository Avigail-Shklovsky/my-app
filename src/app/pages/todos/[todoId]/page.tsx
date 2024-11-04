import { getTodoById } from "@/app/services/getTodoById";
import TodoId from "@/app/types/todoId";


export default async function Page(props: TodoId) {
  const { id } =  props.params;
  console.log("the page of rendering");

  const todo = await getTodoById(id);
  return (
    <div>
      <p>{todo.todo}</p>
    </div>
  );
}


