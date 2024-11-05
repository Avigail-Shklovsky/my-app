"use client"
import { useEffect, useState } from 'react';
// import axios from 'axios';
import Todo from '@/app/components/Todo'
import getTodos from '../../services/getTodo';
import Todoprops from '@/app/types/todo';

export default function ContactPage() {

    const [todos, setTodos] = useState<Todoprops[]>([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const todosData = await getTodos();
            setTodos(todosData); 
        } ;
        fetchTodos();
    }, []); 

    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-3xl mb-4">Todo List</h1>
            {todos.length === 0 ? (
                <p className="text-lg text-gray-500">No todos found.</p>
            ) : (
                <ul className="space-y-2">
                    {todos.map(todo => (
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            todo={todo.todo}
                            completed={todo.completed}
                            userId={todo.userId}
                            
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}