type GreetType = {
    userName?: string
}

export default function Header() {
    const userName = JSON.parse(localStorage.getItem("signObj") || "{}")
/*     console.log(userName); */


    return (
        <>
            <div>
                <h5>{userName.Name}</h5>
                <h5>Logout</h5>
            </div>

        </>)
}