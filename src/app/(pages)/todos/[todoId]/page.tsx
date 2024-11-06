import { getTodoById } from "@/app/services/getTodoById";

interface TodoDetailParams {
  params: {
    todoId: string;
  };
}

export default async function Page({ params }: TodoDetailParams) {
  const { todoId } = params;

  const todo = await getTodoById(todoId);

  function completeHandler() {
;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center ">
      <p className="text-xl">{todo.id}</p>
      <p className="text-xl">{todo.todo}</p>
      {!todo.completed ? (
        <button onClick={completeHandler} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Complete
        </button>
      ) : (
        <p className="text-green-600 mt-4">This task is already completed.</p>
      )}
    </div>
  );
}
