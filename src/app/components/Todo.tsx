import React from "react";
import Todoprops from "../types/todo";

const Todo: React.FC<Todoprops> = ({ id, todo, completed, userId }) => {
  return (
    <>
      <div className="bg-slate-400 h-200 w-200 flex flex-col text-blue-900 border-2 border-slate-500">
        <p>id: {id}</p>
        <p>todo: {todo}</p>
        <p>completed: {completed?'yes':'no'}</p>
        <p>user: {userId}</p>
      </div>
    </>
  );
};


export default Todo;