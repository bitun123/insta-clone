import { createContext, useState } from "react";


export const DashboardContext = createContext();

function DashboardProvider({ children }) {
const [userComments, setuserComments] = useState("")
const [adminMessage, setadminMessage] = useState("")


    return (
        <DashboardContext.Provider value={{ userComments, setuserComments, adminMessage, setadminMessage }}>
        {children}
        </DashboardContext.Provider>
    );
}

export { DashboardProvider };
