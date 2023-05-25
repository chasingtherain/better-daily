import * as Avatar from '@radix-ui/react-avatar';
import Link from 'next/link';

export default function UserAvatar({image,name}) {
    return (
        <Avatar.Root 
          className="mt-1 inline-flex h-[35px] w-[35px] md:h-[40px] md:w-[40px] select-none items-center justify-center overflow-hidden rounded-full align-middle"
        >
          <Avatar.Image
            className="h-full w-full rounded-[inherit] object-cover"
            src={image}
            alt="User Image"
          />
          <Avatar.Fallback className="text-white dark:text-blue-400 bg-black dark:bg-blue-700 leading-1 flex h-full w-full items-center justify-center text-2xl font-medium">
            {name[0]}
          </Avatar.Fallback>
        </Avatar.Root>
    )
  }