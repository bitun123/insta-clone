import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { registration,login } from "../services/auth.api";

export const useAuth = () => {

    const context = useContext(AuthContext)

    const { user, setUser, loading, setLoading } = context

 const handleLogin = async (userName, password) => {
            setLoading(true);
            try {
                const response = await login(userName, password);

             
                if (response && response.user) {
                    setUser(response?.user);
                } else {
                    
                    console.error("Login failed or unexpected response:", response);
                
                    setUser(null); 
                   
                }
            } catch (error) {
                console.error("Login API call failed:", error);
                
                setUser(null); 
             
            } finally {
                setLoading(false);
            }
        };

    const handleRegister = async (userName, email, password) => {

        setLoading(true)
        const response = await registration(userName, email, password)
        setUser(response.user)

        setLoading(false)

    }





    return {
        user, loading, handleLogin, handleRegister
    }

}