"use client"
import * as Label from '@radix-ui/react-label';
import { signOut } from 'next-auth/react';
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link';
import ActionButton from './ui/ActionButton';

export default function ProfilePage({email}) {
    return (
        <div className="flex flex-col items-center gap-5 mt-10 md:mt-20">
            <div className='flex items-center gap-[15px] px-5'>
                <Label.Root className="text-[15px] font-medium leading-[35px]" htmlFor="email">
                Email
                </Label.Root>
                <input
                className="bg-blackA5 shadow-blackA9 inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
                type="text"
                id="email"
                disabled
                defaultValue={email}
                />
            </div>


            <ActionButton name="Log Out" action={() => signOut({ callbackUrl: 'http://localhost:3000/' })}/>
            
            <Link href='/feedback' className={`dark:bg-white text-black hover:text-blue-600 ${buttonVariants({ variant: "outline" })}`}>Have a Suggestion?</Link>
      </div>
    )
};
