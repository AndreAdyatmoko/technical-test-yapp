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

export const registerUser  = async (email, username, password) => {
  try {
    const response = await axios.post("https://techtest.youapp.ai/api/register", {
      email: email,
      username: username,
      password: password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const getProfile = async () => {
  try {
    const token = localStorage.getItem("token")
    const response = await axios.get("https://techtest.youapp.ai/api/getProfile", {
      headers: {
        "x-access-token": token,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
}
