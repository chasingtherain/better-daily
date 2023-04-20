import * as React from "react"
import Link from "next/link"
import NavMenu from "./NavMenu";
import ActionButton from "./ui/ActionButton";
import { useSession } from "next-auth/react";
import UserAvatar from "./ui/profile/UserAvatar";

export default function Navbar() {

    const { data: session, status } = useSession()
    const loading = status === "loading"
    if(session){
        return (
            <div className="flex mt-3 justify-between md:px-5 bg-slate-800">
                <NavMenu/>
                {status === 'authenticated' ? <UserAvatar image={session.user.image} name={session.user.name}/> : <ActionButton name="Login" action=""/>}
            </div>
        );
    }

}
 
