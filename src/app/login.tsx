import { useState } from "react";
import { UserType } from "./UserType";
import { Button, TextField } from "@mui/material";


// const users: UserType[] = [
//     {
//         email: "usmanmala356@gmail.com",
//         password: "123",
//         userName: "usman",
//         hobbies: ["swimming", "Gardening"],
//         post: [
//             {
//                 content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, saepe a. Obcaecati aperiam quis corporis nulla a similique consectetur velit!",
//                 like: 10
//             },
//             {
//                 content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, saepe a. Obcaecati aperiam quis corporis nulla a similique consectetur velit!",
//                 like: 10
//             },
//             {
//                 content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, saepe a. Obcaecati aperiam quis corporis nulla a similique consectetur velit!",
//                 like: 10
//             },
//             {
//                 content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, saepe a. Obcaecati aperiam quis corporis nulla a similique consectetur velit!",
//                 like: 10
//             }
//         ]
//     }
// ]


type authenticateType = {
    authenticate: (auth: boolean) => void;
    setUser: (user: UserType) => void;
}


export default function Login({ authenticate, setUser }: authenticateType) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const loginHandler = () => {
        const userDetail = localStorage.getItem(JSON.parse("signObj"));
        if (userDetail?.Email === email && userDetail?.Password === password){
            authenticate(true)
            setUser(userDetail)
        }
    };

    return (
        <>
            <form onSubmit={}>
                <TextField id="email" label="Email" variant="outlined" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <TextField id="password" label="Password" variant="outlined" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <Button variant="contained" color="success">
                    Login
                </Button>
            </form>
        </>
    )
}
