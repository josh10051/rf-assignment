import axios from "axios";

const API_URL = "https://67a9ec1165ab088ea7e4fdb2.mockapi.io/api/v1/items"; // @todo move this logic in .env file

// Fetch all items
export const getItems = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};

// Add a new item
export const addItem = async (newItem: {
  title: string;
  description: string;
}) => {
  try {
    const response = await axios.post(API_URL, newItem);
    return response.data;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
};

// Delete an item by ID
export const deleteItem = async (id: number) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
};
