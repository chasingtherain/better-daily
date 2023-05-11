
import { getServerSession } from "next-auth/next"
import ProfilePage from '@/components/ProfilePage';
import { authOptions } from "@/pages/api/auth/[...nextauth]";


export default async function Profile() {
  const session = await getServerSession(authOptions)
  console.log("session from profile: ", session)
  if (session) {
    return <ProfilePage email={session.user?.email}/>
  }

}