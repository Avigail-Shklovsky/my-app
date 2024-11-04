import React from "react";
import Todoprops from "../types/todo";
import Link from "next/link";

const Todo: React.FC<Todoprops> = ({ id, todo, completed, userId }) => {
  return (
    <>
      <div className="bg-slate-400 h-200 w-200 flex flex-col text-blue-900 border-2 border-slate-500">
        <p>id: {id}</p>
        <p>todo: {todo}</p>
        <p>completed: {completed ? "yes" : "no"}</p>
        <p>user: {userId}</p>
        <Link href={`/pages/todos/${id}`}>
          <button onClick={()=>{console.log('button pressed');
          }} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
            View Todo
          </button>
        </Link>

      </div>
    </>
  );
};

export default Todo;
