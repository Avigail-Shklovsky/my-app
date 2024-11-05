import { create } from "zustand";
import Todoprops from "../types/todo";

export interface TodoState {
  todos: Todoprops[];
  addTodo: (todo: Todoprops) => void;
  deleteTodo: (id: number) => void;
}

const useStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (todo) =>
    set((state: TodoState) => ({
      todos: [...state.todos, todo],
    })),

  deleteTodo: (id) =>
    set((state: TodoState) => ({
      todos: state.todos.filter((todo) => Number(todo.id) !== id),
    })),
}));

export default useStore;
