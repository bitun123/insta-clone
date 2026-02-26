import React, { useEffect } from "react";
import PostCard from "./PostCard";
import { usePost } from "../hooks/usePost";


function Feed() {
    const {feed ,handleGetFeed,loading} = usePost()

    useEffect(()=>{
        if(loading || feed.length>0){
            return <main><h1>Feed is loading</h1></main>
        }
        handleGetFeed()
    })


    return (
        <div className="feed-container">
            {feed.map((post) => (
               <PostCard key={post._id || post.id} post={post} />
            ))}
        </div>
    );
}

export default Feed;