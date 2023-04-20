import { getSession, useSession } from "next-auth/react"
import useSWR from 'swr'
import { useEffect, useState } from "react"
import { EntryCard } from "../../components/EntryCard"
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"

export default function AllEntries() {
  const { data: session, status } = useSession()

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR(`/api/entry/get/all?params=${session.user.email}`, fetcher)


  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  if (session && status=="authenticated") {
    return (
      <div className="flex flex-wrap justify-center items-center gap-4 md:mt-10">
        {data.entries.map(entry => <EntryCard key={entry.id} entry={entry} />)}
      </div>
    )
  }
    return <p>Access Denied</p>
}

export async function getServerSideProps(context){
  const session = await getServerSession(context.req, context.res, authOptions)
  console.log("session from gssp: ", session)
  if (!session) {
    return{
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      }
    }
  }

  return {
    props: {
      session,
    },
  }
}