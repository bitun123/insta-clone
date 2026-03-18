import {initializeSocketConnection} from "../dashboardapi/chat.socket";


export const useChat = () => {
    return {
        initializeSocketConnection,
    }
}