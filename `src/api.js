import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // Replace with your backend API URL
});

export const runPythonScript = async (input) => {
  try {
    const response = await api.post("/chat", { input });
    return response.data;
  } catch (error) {
    console.error("Error running Python script:", error);
    throw error;
  }
};
