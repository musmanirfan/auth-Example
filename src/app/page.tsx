"use client"

import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const rout = useRouter();


  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("start");

    const userDetail: any = JSON.parse(localStorage.getItem("signObj") || '{}');

    if (userDetail?.Email === email && userDetail?.Password === password) {
      toast.success('😎 User LoggedIn Successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      rout.push("/home")
    } else {
      console.log("Email or password is incorrect");

    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={loginHandler}>
        <TextField id="email" label="Email" variant="outlined" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        <TextField id="password" label="Password" variant="outlined" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
        <Button type="submit" variant="contained" color="success">
          Login
        </Button>
      </form>
      <p>Sign up your account <Link href={"/signup"}>Sign up</Link></p>
    </>
  )
}
