
import Navbar from "../components/Navbar";
import Feed from "../components/Feed";


function Post() {

    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <main className="pt-4 pb-16 flex justify-center">
                <Feed />
            </main>
        </div>
    );
}

export default Post;