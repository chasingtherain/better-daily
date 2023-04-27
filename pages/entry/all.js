import { getSession, useSession } from "next-auth/react"
import useSWR from 'swr'
import { EntryCard } from "../../components/EntryCard"
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import { fetcher } from "../../utils/fetcher"

export default function AllEntries() {
  const { data: session, status } = useSession()

  const { data, error, isLoading } = useSWR(`/api/entry/get/all?params=${session.user.email}`, fetcher)

  const entriesSortedInDesc = data?.entries.sort((a,b)=> new Date(b.todayDate) - new Date(a.todayDate))

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  if (session && status=="authenticated") {
    return (
      <div className="flex flex-wrap justify-center items-center gap-4 mt-10 mb-20">
        {entriesSortedInDesc.map(entry => <EntryCard key={entry.id} entry={entry} />)}
      </div>
    )
  }
}

export async function getServerSideProps(context){
  const session = await getServerSession(context.req, context.res, authOptions)

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