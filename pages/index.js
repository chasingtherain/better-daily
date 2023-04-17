import { getSession, useSession } from "next-auth/react"

export default function Home() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  if (typeof window !== "undefined" && loading) return null
  // console.log(session,status)
  if (session) {
    return (
      <>
        <h1>Protected Page</h1>
        <p>Welcome {session.user.name}</p>
        <p>You can view this page because you are signed in.</p>
      </>
    )
  }
  return <p>Access Denied</p>
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  return {
    props: { session },
  }
}