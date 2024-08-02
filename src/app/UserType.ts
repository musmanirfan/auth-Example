
export type PostType = {
    image: string;
    content : string;
    like: number
}


export type UserType = {
    email: string;
    password: string;
    userName: string;
    hobbies: string[];
    post: PostType[]
}