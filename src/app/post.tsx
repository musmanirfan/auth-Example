"use client"
import { useEffect, useState } from "react"
import { Face6, Favorite, MoreVert } from "@mui/icons-material";

// Type definition for a post
type PostType = {
    postName: string;
    postImage: string | null;
    postDescription: string;
    postLikes: number;
};

export default function Post() {
    const [getPost, setGetPost] = useState<PostType[]>([]);

    useEffect(() => {
        const storedPosts = localStorage.getItem("userPosts");
        if (storedPosts) {
            try {
                const parsedPosts = JSON.parse(storedPosts);
                if (Array.isArray(parsedPosts)) {
                    setGetPost(parsedPosts as PostType[]);
                } else {
                    console.error("Parsed posts are not an array", parsedPosts);
                }
            } catch (error) {
                console.error("Error parsing stored posts", error);
            }
        }
    }, []);

    const handleDeletePost = (index: number) => {
        const updatedPosts = getPost.filter((_, i) => i !== index);
        setGetPost(updatedPosts);
        localStorage.setItem("userPosts", JSON.stringify(updatedPosts));
    };

    return (
        <div>
            {getPost.map((post, i) => (
                <div key={i} className="w-full flex justify-center">
                    <div className="w-1/3 rounded-xl px-5 flex flex-col shadow-2xl pt-5 pb-10 my-3">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <Face6 fontSize="large" />
                                <div>
                                    <p className="font-bold">{post.postName}</p>
                                    <p className="text-xs mt-[-5px]">last online</p>
                                </div>
                            </div>
                            <MoreVert onClick={() => handleDeletePost(i)} className="cursor-pointer" />
                        </div>
                        <p className="text-sm">{post.postDescription}</p>
                        {post.postImage && <img src={post.postImage} alt="Post Image" />}
                        <div className="flex justify-between items-center mt-1">
                            <p>{post.postLikes} Likes</p>
                            <Favorite />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
