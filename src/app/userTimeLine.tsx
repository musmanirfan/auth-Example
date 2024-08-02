import Greet from "./greet";
import Hobbies from "./hobbies";
import Post from "./post";
import { UserType } from "./UserType"

type UserTimeLineType = {
    user : UserType | null
}

export default function UserTimeLine({user}:UserTimeLineType){
    console.log(user);
    return(
        <>
        <h1>Hello World</h1>
        <Greet  />
        <Hobbies hobbies={user?.hobbies} />
        <Post postt={user?.post || []} />
        </>
    )
}