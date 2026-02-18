const mongoose = require("mongoose");


const likeSchema = new mongoose.Schema({
    post :{
        type:mongoose.Schema.Types.ObjectId,
        ref : "posts",
        require :[true,"post id must be required"]
    },
    user :{
        type : String,
        required:[true,"user is required"]
    }
},

{
    timestamps :true
}
)


likeSchema.index({post :1,user : 1},{unique:true});


const likesModels = mongoose.model("likes",likeSchema);


module.exports = likesModels;