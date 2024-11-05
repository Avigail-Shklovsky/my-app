import { getTodoById } from "@/app/services/getTodoById";

interface TodoDetailParams {
  params: {
    todoId: string;
  };
}

export default async function Page({ params }: TodoDetailParams) {
  const { todoId } = params;

  const todo = await getTodoById(todoId);
  return (
    <div>
      <p>{todo.todo}</p>
    </div>
  );
}
