import { useState } from "react";
import { createContext } from "react";

export const PostContext = createContext();


function PostContextProvider({ children }) {
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState(null)
    const [feed, setFeed] = useState(null)
    const [postDetails, setpostDetails] = useState("")
    return (
        <PostContext.Provider value={{ loading, setLoading, posts, setPosts, feed, setFeed, postDetails, setpostDetails }}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContextProvider