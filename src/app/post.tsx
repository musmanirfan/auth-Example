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
        /* const storedPosts = localStorage.getItem("userPosts");
        console.log(JSON.parse(storedPosts));

        if (storedPosts) {
            setGetPost(JSON.parse(storedPosts))
            console.log(getPost);

        } */

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
                        <div key={i}>
                            <p>{post?.postName}</p>
                            {post?.postImage && <img width={200} src={post?.postImage} alt="Post Image" />}
                            <p>{post?.postDescription}</p>
                            <p>{post?.postLikes}</p>
                        </div>
                    ))

                }
            </div >
        </>
    )
}