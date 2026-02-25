import React from "react";
import PostCard from "./PostCard";


function Feed({ posts }) {
    return (
        <div className="feed-container">
            {posts.map((post) => (
               <PostCard key={post._id || post.id} post={post} />
            ))}
        </div>
    );
}

export default Feed;