import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true,
});

export async function registration(userName, email, password) {
    const response = await api.post('/registration', {
        userName, email, password
    })

    return response.data
}

export async function login({ email, password }) {
    const response = await api.post('/login', {
        email, password
    })
    return response.data
}


export async function getMe(){
    const response = await api.get("/get-me")
    return response.data
}
