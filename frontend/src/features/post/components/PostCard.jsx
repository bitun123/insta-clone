
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Smile } from "lucide-react";

import { PostContext } from "../context/PostContextProvider";

function PostCard() {


    return (
        <div className="w-[25rem] h-[35rem] bg-amber-100 rounded">
            <div>
                <div><img src="" alt="" /></div>
                <div><h1>satyajit</h1></div>
            </div>
            <div>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <Heart />
                    <MessageCircle />
                    <Send /> 
                </div>
            </div>
        </div>
    );
}

export default PostCard;
