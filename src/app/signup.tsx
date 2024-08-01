"use client"

import { Password } from '@mui/icons-material'
import { Alert, Button, TextField } from '@mui/material'
import { Lobster } from 'next/font/google'
import React, { useState } from 'react'
import { Bounce, toast } from 'react-toastify'

export default function Signup() {
    const [signName, setsignName] = useState("")
    const [signEmail, setsignEmail] = useState("")
    const [signpass, setsignpass] = useState("")

    type signObjType = {
        Name: string;
        Email: string;
        Password: string
    }
    const signUpFunc = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const signObj: signObjType = {
            Name: signName,
            Email: signEmail,
            Password: signpass
        }
        localStorage.setItem("signObj", JSON.stringify(signObj))
        // setsignName("")
        // setsignEmail("")
        // setsignpass("")
        toast.success('😎 User Created Successfully!', {
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
    }

    return (
        <>
        
            <form onSubmit={signUpFunc} className='mt-10'>
                <TextField focused required id="name" label="Name" value={signName} variant="outlined" onChange={(e) => setsignName(e.target.value)} />
                <TextField required type='email' id="Email" label="Email" value={signEmail} variant="outlined" onChange={(e) => setsignEmail(e.target.value)} />
                <TextField required type='password' id="Password" label="Password" value={signpass} variant="outlined" onChange={e => setsignpass(e.target.value)} />
                <Button type='submit' variant="contained" color="success">
                    Sign Up
                </Button>
            </form>
        </>
    )
}
