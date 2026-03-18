import { createContext, useState } from "react";


export const DashboardContext = createContext();

function DashboardProvider({ children }) {
const [userComments, setuserComments] = useState("")
const [adminMessage, setadminMessage] = useState("")
const [showCommentsPopup, setShowCommentsPopup] = useState(false)


    return (
        <DashboardContext.Provider value={{ userComments, setuserComments, adminMessage, setadminMessage, showCommentsPopup, setShowCommentsPopup }}>
        {children}
        </DashboardContext.Provider>
    );
}

export { DashboardProvider };
