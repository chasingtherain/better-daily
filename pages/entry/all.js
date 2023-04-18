import { getSession, useSession } from "next-auth/react"
import { EntryCard } from "../../components/EntryCard"

export default function Home() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  if (typeof window !== "undefined" && loading) return null
  // console.log(session,status)
  if (session && status=="authenticated") {
    return (
      <>
        <h1>All Entries</h1>
        <EntryCard/>
      </>
    )
  }
    // return <p>Access Denied</p>
}
