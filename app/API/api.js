import axios from "axios";

export const loginUser = async (identifier, password) => {
  try {
    const response = await axios.post("https://techtest.youapp.ai/api/login", {
      email: identifier.includes("@") ? identifier : "",
      username: !identifier.includes("@") ? identifier : "",
      password: password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
