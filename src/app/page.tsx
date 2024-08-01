"use client"

import { useState } from "react";
import UserTimeLine from "./userTimeLine";
import Login from "./login";
import { UserType } from "./UserType";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserType | null>(null)
  return (
    <>
    <ToastContainer />
      {
        isAuthenticated ? (
          <UserTimeLine user={user} />
        ) : (<Login authenticate={setIsAuthenticated} setUser={setUser}

        />)
      }
    </>
  );
}
