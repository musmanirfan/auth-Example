import { PostType } from "./UserType";


type PostProps = {
    postt: PostType[];
}

export default function Post({ postt }: PostProps) {
    return (
        <>
            <div>
                {postt.map((post, i) => (
                    <div key={i}>
                        <p>{post.content}</p>
                        <p>Likes: {post.like}</p>
                    </div>
                ))}
            </div>
        </>
    )
}