import axios from 'axios';

export const getTodoById = async (id: string) => {
    try {
        const response = await axios.get(`https://dummyjson.com/todos/${id}`);
        return response.data; 
    } catch (error) {
        console.error("Error fetching post by ID:", error);
        throw error; 
    }
};
