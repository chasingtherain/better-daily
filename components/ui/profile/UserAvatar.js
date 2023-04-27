import * as Avatar from '@radix-ui/react-avatar';
import Link from 'next/link';

export default function UserAvatar({image,name}) {
    return (
      <Link href='/profile'>
        <Avatar.Root 
          className="bg-blackA3 inline-flex h-[40px] w-[40px] select-none items-center justify-center overflow-hidden rounded-full align-middle"
        >
          <Avatar.Image
            className="h-full w-full rounded-[inherit] object-cover"
            src={image}
            alt="User Image"
          />
          <Avatar.Fallback className="text-blue-700 dark:text-white leading-1 flex h-full w-full items-center justify-center bg-black text-[15px] font-medium">
            {name[0]}
          </Avatar.Fallback>
        </Avatar.Root>
      </Link>
    )
  }