import * as React from "react"
import Link from "next/link"
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export default function Navbar() {

  return (
      <NavigationMenu.Root className="relative z-[1] flex w-screen justify-center">
        <NavigationMenu.List className="center shadow-blackA7 m-0 flex list-none rounded-[6px] bg-white p-1 shadow-[0_2px_10px]">

          <NavigationMenu.Item>
            <NavigationMenu.Link
              className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            >
              <Link href="/"> 
                Home
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link
              className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            >
              <Link href="/"> 
                Entries
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>

        </NavigationMenu.List>
      </NavigationMenu.Root>
    );

}
 
