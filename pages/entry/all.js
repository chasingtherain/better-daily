import { getSession, useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { EntryCard } from "../../components/EntryCard"
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"

export default function Home() {
  const { data: session, status } = useSession()
  const loading = status === "loading"
  const [entries, setEntries] = useState([])
  console.log(session)
    useEffect(() => {
    // Fetch data from the database here
    const fetchData = async () => {
        try {
          if (session && session.user && session.user.email){
            const response = await fetch(`/api/entry/get/all?params=${session.user.email}`);
            console.log("response: ", response)
            const jsonData = await response.json();

            setEntries(jsonData.entries);
          }
        } 
        catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
    }, [session]); // Empty dependency array to run effect only on component mount


  if (typeof window !== "undefined" && loading) return null
  // console.log(session,status)

  if (session && status=="authenticated") {
    return (
      <div className="flex flex-wrap justify-center items-center gap-4 md:mt-10">
        {entries.map(entry => <EntryCard key={entry.id} entry={entry} />)}
      </div>
    )
  }
    // return <p>Access Denied</p>
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