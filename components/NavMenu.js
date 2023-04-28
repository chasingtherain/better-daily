import * as React from "react"
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export default function NavMenu() {
  const navItems = [
    {title: "Home", url: "/"},
    {title: "Today's Entry", url:"/entry"},
    {title: "All Entries", url:"/entry/all"},
  ]
  return (
      <NavigationMenu.Root className="relative z-[1] flex w-screen ml-4 mt-2 md:mt-0 md:ml-10">
        <NavigationMenu.List className="flex rounded-[4px] p-2 shadow-lg shadow-blue-500/50 border-2">
          {navItems.map((item,index)=> 
          <NavigationMenu.Item key={index}>
            <NavigationMenu.Link
              href={item.url}
              className="dark:hover:bg-blue-700 hover:bg-blue-50 block select-none rounded-[4px] px-1.5 md:px-3 md:py-2 text-[13px] md:text-[15px] font-medium leading-none no-underline"
            >
                {item.title}
            </NavigationMenu.Link>
          </NavigationMenu.Item>)}
        </NavigationMenu.List>
      </NavigationMenu.Root>
    );

}
 
