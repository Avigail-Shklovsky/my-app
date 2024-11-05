export const getTodoById = async (id: string) => {
  try {
    const response = await fetch(`https://dummyjson.com/todos/${id}`);

    if (!response.ok) {
      throw new Error(`Error fetching todo by ID:  ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Fetch response:", data); // Log the data to inspect it
    return data;
  } catch (error) {
    console.error("Error fetching todo by ID:", error);
    throw error;
  }
};
