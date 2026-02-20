import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true,
});

export async function registration(username, email, password) {
    const response = await api.post('/registration', {
        username, email, password
    })

    return response.data
}

export async function login(userName, password) {
    const response = await api.post('/login', {
        userName, password
    })

    return response.user
}
