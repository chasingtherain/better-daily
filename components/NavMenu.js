import * as React from "react"
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export default function NavMenu() {
  const navItems = [
    {title: "Home", url: "/"},
    {title: "Today's Entry", url:"/entry"},
    {title: "All Entries", url:"/entry/all"}
  ]
  return (
      <NavigationMenu.Root className="relative z-[1] flex w-screen ml-4 md:ml-10">
        <NavigationMenu.List className="center shadow-blackA7 m-0 flex list-none rounded-[6px] bg-white p-2 shadow-[0_2px_10px]">
          {navItems.map((item,index)=> 
          <NavigationMenu.Item key={index}>
            <NavigationMenu.Link
              href={item.url}
              className="text-blue-500 dark:text-white hover:bg-gray-100 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline"
            >
                {item.title}
            </NavigationMenu.Link>
          </NavigationMenu.Item>)}
        </NavigationMenu.List>
      </NavigationMenu.Root>
    );

}
 
