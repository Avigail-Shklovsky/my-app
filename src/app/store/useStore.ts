import { create } from "zustand";

interface Todo {
  id: number;
  title: string;
}

export interface TodoState {
  todos: Todo[];
  get: () => Todo[];
  add: (title: string) => void;
  update: (id: number, title: string) => void;
  delete: (id: number) => void;
}

const useStore = create<TodoState>((set, get) => ({
  todos: [],
  get: () => {
    const state = get(); 
    return state.todos; 
  },
  add: (title) =>
    set((state: TodoState) => ({
      todos: [...state.todos, { id: Date.now(), title }],
    })),

  delete: (id) =>
    set((state: TodoState) => ({
      todos: state.todos.filter((todo) => Number(todo.id) !== id),
    })),

  update: (id, title) =>
    set((state: TodoState) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, title } : todo
      ),
    })),
}));

export default useStore;
