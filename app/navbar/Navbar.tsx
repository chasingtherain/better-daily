"use client"
import * as React from "react"
import NavMenu from "../../components/NavMenu";
import ActionButton from "../../components/ui/ActionButton";
import { useSession } from "next-auth/react";
import UserAvatar from "../../components/ui/profile/UserAvatar";
import { ThemeChanger } from "../../components/ThemeChanger";
import LoadingNavbar from "../../components/loadingSkeleton/LoadingNavbar";

export default function Navbar() {

    const { data: session, status } = useSession()

    console.log("session from navbar: ", session, status)
    // if (status == 'loading') return <LoadingNavbar/> 
    if (session && status == 'authenticated'){
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
    return <></>
}
 
