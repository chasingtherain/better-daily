"use client"
import { useSession } from "next-auth/react"
import useSWR from 'swr'
import { Entry } from "@/types/entry"
import { fetcher } from "@/utils/fetcher"
import LoadingCards from "@/components/loadingSkeleton/LoadingCards"
import { EntryCard } from "@/components/EntryCard"


export default function AllEntriesPage() {
    const { data: session, status } = useSession()

    const { data, error, isLoading } = useSWR(`/api/entry/get/all?params=${session?.user?.email}`, fetcher)

    const entriesSortedInDesc = data?.entries?.sort((a,b)=> +new Date(b.todayDate) - +new Date(a.todayDate))

    if (error) return <div>failed to load</div>
    if (session && !isLoading) {
        return (
            <div className="flex flex-wrap justify-center items-center gap-4 mt-10 mb-20">
            {entriesSortedInDesc.map((entry: Entry) => <EntryCard key={entry.id} entry={entry} />)}
            </div>
        )
    }
    // return <LoadingCards/>
    return <></>
}