"use client";
import React, { useState } from "react";
import useStore from "../store/useStore";
import { TodoState } from "../store/useStore";

export const AddDeleteTodo = () => {
  //   const todos = useStore((state: TodoState) => state.todos);
  const [title, setTitle] = useState("");
  const addTodo = useStore((state: TodoState) => state.add);
  const deleteTodo = useStore((state: TodoState) => state.delete);
  const updateTodo = useStore((state: TodoState) => state.update);
  const todos = useStore((state: TodoState) => state.get()); // Use the get method to retrieve todos

  const [isUpdating, setIsUpdating] = useState(false);
  const [currentId, setCurrentId] = useState<number | null>(null);

  const handleAdd = () => {
    if (title.trim()) {
      if (isUpdating && currentId !== null) {
        updateTodo(currentId, title);
      } else {
        addTodo(title);
      }
      setTitle("");
      setIsUpdating(false);
      setCurrentId(null);
    }
  };

  const handleUpdate = (id: number) => {
    const todoToUpdate = todos.find((todo) => todo.id === id);
    if (todoToUpdate) {
      setTitle(todoToUpdate.title);
      setIsUpdating(true);
      setCurrentId(id);
    }
  };

  return (
    <div className="flex">
      <div className="m-10 flex flex-col  ">
        <p className="text-2xl font-bold mb-2">
          {isUpdating ? "Update Todo:" : "Add Todo:"}
        </p>
        <div className="flex gap-3 mb-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-black border-2"
          />
          <button
            type="button"
            onClick={handleAdd}
            className="border-black border-2 font-bold w-20"
          >
            {isUpdating ? "Save" : "Add"}
          </button>
        </div>

        <div>
          <ul className="list-disc pl-5 ">
            {todos.map((todo) => (
              <li key={todo.id} className="mb-2">
                <div className="flex gap-2 items-center">
                  <span className="text-lg">{todo.title}</span>
                  <button
                    type="button"
                    onClick={() => deleteTodo(todo.id)}
                    className="text-red-500 border-red-500 border-2 h-5 w-10 text-xs "
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    onClick={() => handleUpdate(todo.id)}
                    className="text-blue-600 border-blue-600 border-2 h-5 w-12 text-xs "
                  >
                    Update
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
