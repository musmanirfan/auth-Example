"use client"

import { ToastContainer } from "react-toastify";
import UserTimeLine from "../userTimeLine";
import { useState } from "react";
import { UserType } from "../UserType";

export default function Home() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserType | null>(null)
  
  return (
    <>
      <ToastContainer />
      <UserTimeLine />
    </>
  );
}