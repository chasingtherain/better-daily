import * as React from "react"
import Link from "next/link"
import NavMenu from "./NavMenu";
import ActionButton from "./ui/ActionButton";
import { useSession } from "next-auth/react";
import UserAvatar from "./ui/profile/UserAvatar";

export default function Navbar() {

    const { data: session, status } = useSession()
    const loading = status === "loading"
    console.log(session,status,loading)
    console.log(session)
    return (
        <div className="flex mt-3 border-2 justify-between">
            <NavMenu/>
            {status === 'authenticated' ? <UserAvatar image={session.user.image} name={session.user.name}/> : <ActionButton name="Login" action=""/>}
        </div>
    );

}
 
