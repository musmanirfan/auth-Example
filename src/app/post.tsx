import { useEffect, useState } from "react"


export default function Post() {

    const [getPost, setGetPost] = useState({});
    useEffect(()=>{
        setGetPost(JSON.parse(localStorage.getItem("userPosts")))
    }, [])
    return (
        <>
            <div>

            </div>
        </>
    )
}