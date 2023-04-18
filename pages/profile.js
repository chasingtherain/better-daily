import * as Label from '@radix-ui/react-label';
import { signOut, useSession } from 'next-auth/react';
import ActionButton from '../components/ui/ActionButton';

export default function Profile() {
  const { data: session, status } = useSession()

  if (session) {
    return (
        <div className="flex flex-col items-center gap-5 mt-10 md:mt-20">
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
      </div>
    )
  }
  return <p>Access Denied</p>
}