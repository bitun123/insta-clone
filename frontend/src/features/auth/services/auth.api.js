import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true,
});

export async function registration(userName, email, password) {
    const response = await api.post('/registration', {
        userName, email, password
    })

    return response.user
}

export async function login(userName, password) {
    const response = await api.post('/login', {
        userName, password
    })

    return response.user
}
