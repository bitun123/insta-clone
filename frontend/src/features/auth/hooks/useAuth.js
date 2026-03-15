import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { registration, login,getMe } from "../services/auth.api";
import { useEffect } from "react";

export const useAuth = () => {
  const context = useContext(AuthContext);

  const { User, setUser, loading, setLoading } = context;

  const handleLogin = async ({ email, password }) => {
      setLoading(true);
    try {
      const response = await login({ email, password });
      setUser(response.user || response);
      return response;

    } catch (error) {
      console.error("Login API call failed:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (userName, email, password) => {
    try {
      setLoading(true);
      const response = await registration(userName, email, password);
      setUser(response.user || response);
      return response;
    } catch (error) {
      console.error("Registration failed:", error);
      setUser(null);
    }
    finally {      setLoading(false);
    }
  };

const handleGetMe = async () => {
  try {
    const response = await getMe();
    setUser(response.user);
    return response;
  } catch (error) {
    console.error("GetMe API call failed:", error);
    setUser(null);
  } finally {
    setLoading(false);
  }
}



useEffect(()=>{
    handleGetMe();
},[])

  return {
    User,
    loading,
    handleLogin,
    handleRegister,
    handleGetMe
  };
};
