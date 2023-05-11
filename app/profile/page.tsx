
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import ProfilePage from "../ProfilePage";


export default async function Profile() {
  const session = await getServerSession(authOptions)
  console.log("session from profile: ", session)
  if (session) {
    return <ProfilePage email={session.user?.email}/>
  }

}