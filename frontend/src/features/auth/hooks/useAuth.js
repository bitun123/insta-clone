import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { registration,login } from "../services/auth.api";


export const useAuth = () => {

    const context = useContext(AuthContext)

    const { user, setUser, loading, setLoading } = context

 const handleLogin = async (username, password) => {
            setLoading(true);
            try {
                const response = await login(username, password);

                // Check if response and response.user exist
                if (response && response.user) {
                    setUser(response.user);
                } else {
                    // Handle cases where response is not as expected (e.g., login failed, no user property)
                    console.error("Login failed or unexpected response:", response);
                    // Optionally, clear user or show an error message to the UI
                    setUser(null); // Or keep current user, depending on desired behavior
                    // throw new Error("Invalid login credentials or server error"); // Re-throw to be caught higher up if needed
                }
            } catch (error) {
                console.error("Login API call failed:", error);
                // Handle network errors, server errors, etc.
                setUser(null); // Clear user on error
                // Optionally, show an error message to the user
            } finally {
                setLoading(false);
            }
        };

    const handleRegister = async (username, email, password) => {

        setLoading(true)
        const response = await registration(username, email, password)
        setUser(response.user)

        setLoading(false)

    }

    return {
        user, loading, handleLogin, handleRegister
    }

}