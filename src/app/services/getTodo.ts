import axios from 'axios';

 const getTodos = async () => {
    try {
        const response = await axios.get("https://dummyjson.com/todos/", {
            headers: {
                "Cache-Control": "no-cache",
            },
        });
        return response.data.todos; 
    } catch (error) {
        console.error("Error fetching todos:", error);
        throw error; 
    }
};
export default getTodos;