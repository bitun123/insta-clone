import { getFeed } from "../services/post.api";
import { useContext } from "react";
import { PostContext } from "../context/PostContextProvider";


export const  usePost = ()=>{
const context = useContext(PostContext)

const {loading,setLoading,posts,setPosts,feed,setFeed}  = context;

const handleGetFeed  = async()=>{
    setLoading(true)
const data = await getFeed()
setFeed(data.posts)
setLoading(false)

}


return{loading,feed,posts,handleGetFeed}
}