import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/",
});

// Add a request interceptor to automatically add the token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("fittrack-app-token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const UserSignUp = async (data) => API.post("/user/signup", data);
export const UserSignIn = async (data) => API.post("/user/signin", data);

export const getDashboardDetails = async () => API.get("/user/dashboard");

export const getWorkouts = async (date = "") =>
  await API.get(`/user/workout${date}`);

export const addWorkout = async (data) => await API.post(`/user/workout`, data);
