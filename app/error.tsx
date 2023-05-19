'use client'; // Error components must be Client Components
 
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useEffect } from 'react';
 
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <div className="flex flex-col items-center justify-center mt-28 md:mt-20">
      <Image
        src="/images/error/doge.png" // Replace with the actual path to your image
        
        alt="Error! Doge is here with you"
        width={250}
        height={250}
      />
      <h2 className='text-3xl font-bold'>Something went wrong!</h2>
      <Button
        className='mt-5 font-bold'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
}