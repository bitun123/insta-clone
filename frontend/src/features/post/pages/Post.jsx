import { useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import { PostContext } from "../context/postContext";

function Post() {
    const { loading, setLoading, feed, setFeed } = useContext(PostContext);


    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <main className="pt-4 pb-16 flex justify-center">
                <Feed posts={feed} loading={loading} />
            </main>
        </div>
    );
}

export default Post;