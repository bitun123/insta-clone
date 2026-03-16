import { createContext, useState } from "react";


export const AuthContext = createContext()


export const AuthProvider = ({ children }) => {

    const [ User, setUser ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ allUsers, setAllUsers ] = useState([])

    
    return (
        <AuthContext.Provider value={{ User, setUser, loading, setLoading, allUsers, setAllUsers }} >
            {children}
        </AuthContext.Provider>
    )
}