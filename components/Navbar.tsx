"use client"
import * as React from "react"
import NavMenu from "./NavMenu";
import ActionButton from "./ui/ActionButton";
import { useSession } from "next-auth/react";
import UserAvatar from "./ui/profile/UserAvatar";
import { ThemeChanger } from "./ThemeChanger";

export default function Navbar() {

    const { data: session, status } = useSession()

    return (
        <div className="flex mt-5 justify-between items-center px-1 mr-2 md:mr-0 md:px-5">
            <NavMenu/>
            <div className="flex gap-1 md:gap-2">
                <ThemeChanger/> 
                {status === 'authenticated' ? <UserAvatar image={session?.user?.image} name={session?.user?.name}/> : <ActionButton name="Login"/>}
            </div>
        </div>
    );
}
 
