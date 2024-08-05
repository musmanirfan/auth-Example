"use client"
import { useEffect, useState } from "react"
import Face6Icon from '@mui/icons-material/Face6';
import { Face6 } from "@mui/icons-material";


type PostType = {
    postName: string;
    postImage: string | null;
    postDescription: string;
    postLikes: number;
};


export default function Post() {

    const [getPost, setGetPost] = useState([]);

    useEffect(() => {

        const storedPosts = localStorage.getItem("userPosts");
        console.log(JSON.parse(storedPosts));

        if (storedPosts) {
            setGetPost(JSON.parse(storedPosts))
        }
    }, [])

    return (
        <>
            <div>
                {
                    getPost.length > 0 && getPost?.map((post, i) => (
                        <div className="w-[100%] flex justify-center">
                            <div key={i} className="w-[30%] flex flex-col m-[0] bg-slate-300">
                                <div className="flex gap-[5px] items-center">
                                    <p>{<Face6 fontSize="large" />}</p>
                                    <div>
                                        <p className="font-bold  p-0">{post?.postName}</p>
                                        <p className="text-[10px] mt-[-5px] p-0">last online</p>
                                    </div>
                                </div>
                                <p className="text-[12px]">{post?.postDescription}</p>
                                {post?.postImage && <img src={post?.postImage} alt="Post Image" />}
                                <p>{post?.postLikes}❤</p>
                            </div>
                        </div>
                    ))

                }
            </div >
        </>
    )
}