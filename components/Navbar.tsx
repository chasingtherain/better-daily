"use client"
import * as React from "react"
import NavMenu from "./NavMenu";
import ActionButton from "./ui/ActionButton";
import { useSession } from "next-auth/react";
import UserAvatar from "./ui/profile/UserAvatar";
import { ThemeChanger } from "./ThemeChanger";
import LoadingNavbar from "./loadingSkeleton/LoadingNavbar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from "next/link";

export default function Navbar() {

    const { data: session, status } = useSession()


    // console.log("session from navbar: ", session, status)
    if (status == 'loading') return <LoadingNavbar/> 
    if (session && status == 'authenticated'){
        return (
            <div className="flex mt-5 justify-between items-center px-1 mr-2 md:mr-0 md:px-5">
                <NavMenu/>
                <div className="flex gap-1 md:gap-2">
                    <ThemeChanger/> 
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <UserAvatar image={session?.user?.image} name={session?.user?.name}/>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <Link href='/profile'>
                                <DropdownMenuItem>
                                    Profile
                                </DropdownMenuItem>
                            </Link>
                            <Link href='/quadrant'>
                                <DropdownMenuItem>
                                    Priorities
                                </DropdownMenuItem>
                            </Link>
                            <Link href='/entry/all'>
                                <DropdownMenuItem>
                                    All Entries
                                </DropdownMenuItem>
                            </Link>
                            <Link href='/relationship'>
                                <DropdownMenuItem>
                                    Love Language
                                </DropdownMenuItem>
                            </Link>
                            <Link href='/life-experiences'>
                                <DropdownMenuItem>
                                    Life Experiences
                                </DropdownMenuItem>
                            </Link>
                            <DropdownMenuItem disabled>
                                Mission (Coming Soon)
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    
                </div>
            </div>
        );
    }
    return <></>
}
  
