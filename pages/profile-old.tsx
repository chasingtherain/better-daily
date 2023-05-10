import * as Label from '@radix-ui/react-label';
import { signOut, useSession } from 'next-auth/react';
import ActionButton from '../components/ui/ActionButton';
import { authOptions } from '@/pages/api/auth/[...nextauth]-old'
import { getServerSession } from "next-auth/next"
import { ServerProps } from '@/types/serverProps';
import { Button } from '@/components/ui/button';
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link';


export default function Profile(props: ServerProps) {
  const {session} = props

  if (session) {
    return (
        <div className="flex flex-col items-center gap-5 mt-10 md:mt-20">
            <p>from profile</p>
            <div className='flex items-center gap-[15px] px-5'>
                <Label.Root className="text-[15px] font-medium leading-[35px]" htmlFor="email">
                Email
                </Label.Root>
                <input
                className="bg-blackA5 shadow-blackA9 inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
                type="text"
                id="email"
                disabled
                defaultValue={session.user.email}
                />
            </div>


            <ActionButton name="Log Out" action={() => signOut({ callbackUrl: 'http://localhost:3000/' })}/>
            
            <Link href='/feedback' className={`dark:bg-white text-black hover:text-blue-600 ${buttonVariants({ variant: "outline" })}`}>Have a Suggestion?</Link>
      </div>
    )
  }
  return <p>Access Denied</p>
}

export async function getServerSideProps(context){
  const session = await getServerSession(context.req, context.res, authOptions)
  // console.log("session from gssp: ", session)
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