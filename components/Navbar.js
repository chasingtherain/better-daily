import * as React from "react"
import Link from "next/link"
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import NavMenu from "./NavMenu";
import ActionButton from "./ui/ActionButton";

export default function Navbar() {

  return (
     <div className="flex mt-3">
         <NavMenu/>
         <ActionButton name="Login" action=""/>
     </div>
    );

}
 
