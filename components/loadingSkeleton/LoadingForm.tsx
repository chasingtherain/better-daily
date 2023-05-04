import LoadingFormInput from "./LoadingFormInput"
import { Skeleton } from "@/components/ui/skeleton"

export default function LoadingForm() {
    return <div className="flex flex-col justify-center items-center mt-10 mb-20">
            <Skeleton className="animate-pulse dark:bg-slate-200 bg-slate-400 h-4 w-[350px] mb-2 md:w-[400px]" />
            <Skeleton className="animate-pulse dark:bg-slate-200 bg-slate-400 box-border h-8 mb-4 w-[350px] md:w-[400px] justify-start text-left font-normal border-gray-50"/>
            {[...Array(2).keys()].map((i) => 
               <LoadingFormInput key={i}/>
            )}
            <div className='flex gap-10 px-5'>
                <Skeleton className={`animate-pulse h-10 w-[150px] md:w-[175px] dark:bg-slate-200 bg-slate-400 rounded-[4px]`}/>
                <Skeleton className={`animate-pulse h-10 w-[150px] md:w-[175px] dark:bg-slate-200 bg-slate-400 rounded-[4px]`}/>
            </div>
        </div>
};
