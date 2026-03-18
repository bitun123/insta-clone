const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true, "userId is required"],
    },

    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts",
        required: [true, "postId is required"],
    },
    content: {
        type: String,
        required: [true, "content is required"],
        trim: true
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        }
    ],

    parentCommentId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "comments",
        default: null
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }

}, {
    timestamps: true 
});


// Indexes for efficient querying

// Index to quickly retrieve comments for a post, sorted by creation time
commentSchema.index({ postId: 1, createdAt: -1 });

// Index to efficiently retrieve replies to a comment
commentSchema.index({ parentCommentId: 1 });

// Index to quickly find comments by a specific user
commentSchema.index({ userId: 1 });


const commentModel = mongoose.model("comments", commentSchema);

module.exports = commentModel;