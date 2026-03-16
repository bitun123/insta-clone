import axios from "axios";

const apiAuth = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true,
});

const apiUsers = axios.create({
  baseURL: "http://localhost:3000/api/users",
  withCredentials: true,
});

export async function registration(username, email, password) {
  const response = await apiAuth.post("/registration", {
    userName: username,
    email,
    password,
  });

  return response.data;
}

export async function login({ email, password }) {
  // If the email field doesn't contain an @, it's a username.
  const payload = email.includes("@") 
    ? { email, password } 
    : { userName: email, password };
    
  const response = await apiAuth.post("/login", payload);

  return response.data;
}

export async function getMe() {
  const response = await apiAuth.get("/get-me");
  return response.data;
}

export async function followUser(userId) {
  const response = await apiUsers.post(`/follow/${userId}`);
  return response.data;
}

export async function unfollowUser(userId) {
  const response = await apiUsers.post(`/unfollow/${userId}`);
  return response.data;
}


export async function getAllUsers() {
  const response = await apiAuth.get("/getAllUsers");
  return response.data;
}

export async function logout() {
  const response = await apiAuth.post("/logout");
  return response.data;
}
