"use client"
import { useEffect, useState } from "react"
import { Face6, Favorite, MoreVert } from "@mui/icons-material";

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
        <>
            <div>
                {
                    getPost.length > 0 && getPost?.map((post, i) => (
                        <div className="w-[100%] flex justify-center">
                            <div key={i} className="w-[30%] rounded-xl px-5 flex flex-col m-[0] shadow-2xl pt-5 pb-10 my-3">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-[5px] items-center">
                                        <p>{<Face6 fontSize="large" />}</p>
                                        <div>
                                            <p className="font-bold  p-0">{post?.postName}</p>
                                            <p className="text-[10px] mt-[-5px] p-0">last online</p>
                                        </div>
                                    </div>
                                    <div onClick={() => handleDeletePost(i)} className="cursor-pointer">{<MoreVert />}</div>
                                </div>
                                <p className="text-[12px]">{post?.postDescription}</p>
                                {post?.postImage && <img src={post?.postImage} alt="Post Image" />}
                                <div className="flex justify-between items-center mt-1">
                                    <p>{post?.postLikes} Likes</p>
                                    <p>{<Favorite />}</p>
                                </div>
                            </div>
                        </div>
                    ))

                }
            </div >
        </>
    )
}