import { useState, useContext, useEffect } from "react";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Smile } from "lucide-react";

import { PostContext } from "../context/PostContextProvider";
import {usePost}  from "../hooks/usePost"
function PostCard({ post }) {
const {feed ,handleGetFeed,loading} = usePost()

useEffect(()=>{
    handleGetFeed()
},[])


if(loading || !feed){
    return <main><h1>Feed is loading</h1></main>
}

    return (
        <article className="post-card">
            {/* Header */}
            <div className="post-header">
                <div className="post-user-info">
                    <div className="avatar-ring">
                        <img src={avatar} alt={post.user?.username} className="post-avatar" />
                    </div>
                    <div className="post-user-text">
                        <span className="post-username">{post.user?.username || "unknown"}</span>
                        {post.location && <span className="post-location">{post.location}</span>}
                    </div>
                </div>
                <button className="icon-btn"><MoreHorizontal size={20} /></button>
            </div>

            {/* Image */}
            <div className="post-image-wrapper" onDoubleClick={handleDoubleTap}>
                <img
                    src={post.imageUrl || post.image || post.media}
                    alt={post.caption || "Post"}
                    className="post-image"
                    loading="lazy"
                />
            </div>

            {/* Actions */}
            <div className="post-actions">
                <div className="post-actions-left">
                    <button
                        className={`icon-btn like-btn${liked ? " liked" : ""}`}
                        onClick={handleLike}
                        aria-label={liked ? "Unlike" : "Like"}
                    >
                        <Heart size={24} fill={liked ? "#ef4444" : "none"} stroke={liked ? "#ef4444" : "currentColor"} />
                    </button>
                    <button className="icon-btn" onClick={() => setShowComment(!showComment)} aria-label="Comment">
                        <MessageCircle size={24} />
                    </button>
                    <button className="icon-btn" aria-label="Share">
                        <Send size={24} />
                    </button>
                </div>
                <button
                    className={`icon-btn save-btn${saved ? " saved" : ""}`}
                    onClick={() => setSaved(!saved)}
                    aria-label={saved ? "Unsave" : "Save"}
                >
                    <Bookmark size={24} fill={saved ? "#fff" : "none"} />
                </button>
            </div>

            {/* Likes */}
            {likeCount > 0 && (
                <div className="post-likes">{likeCount.toLocaleString()} like{likeCount !== 1 ? "s" : ""}</div>
            )}

            {/* Caption */}
            {post.caption && (
                <div className="post-caption">
                    <span className="post-username">{post.user?.username}</span> {post.caption}
                </div>
            )}

            {/* Timestamp */}
            {post.createdAt && (
                <div className="post-time">{timeAgo(post.createdAt)}</div>
            )}

            {/* Comment input */}
            {showComment && (
                <div className="post-comment-input">
                    <Smile size={20} className="comment-emoji-icon" />
                    <input
                        type="text"
                        placeholder="Add a comment…"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        className="comment-input"
                    />
                    {commentText.trim() && (
                        <button className="comment-post-btn" onClick={() => setCommentText("")}>
                            Post
                        </button>
                    )}
                </div>
            )}
        </article>
    );
}

export default PostCard;
