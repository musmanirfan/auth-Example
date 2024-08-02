import AddAPost from "./addapost";
import Header from "./header";
import Hobbies from "./hobbies";
import Post from "./post";
import { UserType } from "./UserType"

type UserTimeLineType = {
    user: UserType | null
}

export default function UserTimeLine({ user }: UserTimeLineType) {
/*     console.log(user); */
    return (
        <>
            <Header />
            <AddAPost />
            <Post />
            <Hobbies hobbies={user?.hobbies} />
        </>
    )
}