"use client"
import { useSession } from "next-auth/react"
import useSWR from 'swr'
import { Entry } from "@/types/entry"
import { fetcher } from "@/utils/fetcher"
import Link from "next/link"
import { LifeExperienceEntryCard } from "@/components/LifeExperience/LifeExperienceEntryCard"


export default function Page() {
    const { data: session, status } = useSession()

    const { data, error, isLoading } = useSWR(`/api/life-experiences/get/all?params=${session?.user?.email}`, fetcher)

    const entriesSortedInDesc = data?.allLifeExperienceEntries?.sort((a,b)=> Number(b.year) - Number(a.year))

    if (error) return <div>failed to load</div>
    
    if (session && !isLoading) {
        return (
            <div className="flex flex-wrap justify-center items-center gap-4 mt-10 mb-20">
            {
                entriesSortedInDesc.map(entry => <LifeExperienceEntryCard key={entry.id} entry={entry} />)
            }
            {
                !entriesSortedInDesc.length &&
                <Link 
                    className='text-center'
                    href='/life-experiences'>
                        <p>Add a new entry <span className='inline underline'> here </span> </p> 
                </Link>
            }
            </div>
        )
    }
    if(!session && isLoading){
        return <p className='text-center text-xl mt-30'>loading...</p>
    }
    if(!session){
        return <p className='text-center text-xl mt-30'>almost there...</p>
    }
    return <></>
}