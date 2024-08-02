type GreetType = {
    userName?: string
}

export default function Greet() {
    const userName = JSON.parse(localStorage.getItem("signObj") || "{}")
    console.log(userName);
    

    return <h1>Welcome {userName.Name}</h1>
}