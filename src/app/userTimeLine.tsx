import AddAPost from "./addapost";
import Header from "./header";
import Hobbies from "./hobbies";
import Post from "./post";
import { UserType } from "./UserType"

type UserTimeLineType = {
    user: UserType | null
}

export default function UserTimeLine() {
/*     console.log(user); */
    return (
        <>
            <Header />
            <Post />
        </>
    )
}