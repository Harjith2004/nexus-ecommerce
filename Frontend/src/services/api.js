import axios from "axios";

// Create a reusable Axios instance pointing to our Spring Boot backend
const API = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
