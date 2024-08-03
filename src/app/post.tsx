"use client"
import { useEffect, useState } from "react"
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
                                {/* <div className="flex justify-between"> */}
                                    <p></p>
                                    <p>{post?.postName}</p>
                                {/* </div> */}
                                <p>{post?.postDescription}</p>
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