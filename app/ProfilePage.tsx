"use client"
import * as Label from '@radix-ui/react-label';
import { signOut, useSession } from 'next-auth/react';
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link';
import ActionButton from '@/components/ui/ActionButton';
import EffortRating from '@/components/EffortRating/EffortRating';
import { useMemo, useState } from 'react';
import useSWR from 'swr'
import { fetcher } from '@/utils/fetcher';

export default function ProfilePage() {
    const { data: session, status } = useSession()
    const { data, error, isLoading } = useSWR(`/api/entry/get/all?params=${session?.user?.email}`, fetcher)
    
    let encouragementString = '';


    if (session && !isLoading) {
        const email = session!.user!.email || '';

        const entriesWithEffortRating = data?.entries.filter(entry => entry.effortRating != 0)
        // to calculate average score: total rating / num of ratings
        const averageScore = entriesWithEffortRating.reduce((a,currentObj) => a+currentObj.effortRating, 0) / entriesWithEffortRating.length
        console.log(averageScore, entriesWithEffortRating)

        if (averageScore <= 2) {
            encouragementString = 'All things are difficult before they are easy. Keep trying!';
          } else if (averageScore > 2 && averageScore < 3.5) {
            encouragementString = 'Execution is the foundation for momentum. Keep executing!';
          } else {
            encouragementString = 'Great achievement always requires great sacrifice. Work for it!';
          }

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


                    <p className="text-[15px] font-medium leading-[25px]">
                        Average effort over {entriesWithEffortRating.length} days: {averageScore} / 4
                    </p>
                    <EffortRating averageScore={averageScore}/>
                    {encouragementString}



                <ActionButton name="Log Out" action={() => signOut({ callbackUrl: 'http://localhost:3000/' })}/>
                
                <Link href='/feedback' className={`dark:bg-white text-black hover:text-blue-600 ${buttonVariants({ variant: "outline" })}`}>Have a Suggestion?</Link>
            </div>
        )
    }
    return <p>Loading.. or not?</p>
}