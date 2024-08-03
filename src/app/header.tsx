import AddAPost from "./addapost"

type GreetType = {
    userName?: string
}

export default function Header() {
    const userName = JSON.parse(localStorage.getItem("signObj") || "{}")
/*     console.log(userName); */


    return (
        <>
            <div className="flex justify-between px-10 py-5 bg-black items-center">
                <h5 className="text-white uppercase">{userName.Name}</h5>
            <AddAPost />
                <button className="border border-[green] px-10 py-2 text-white uppercase text-xs">Logout</button>
            </div>

        </>)
}