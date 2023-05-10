import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import ProfilePage from '@/components/ProfilePage';


export default async function Profile() {
  const session = await getServerSession(authOptions)

  if (session) {
    return <ProfilePage email={session.user?.email}/>
  }
  if (!session) {
    return{
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      }
    }
  }
}