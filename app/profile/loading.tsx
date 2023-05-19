import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {

    return(    
        // <p>loading...</p>        
        <div className="flex flex-col items-center gap-5 mt-10 md:mt-20">
            <Skeleton className="animate-pulse dark:bg-slate-200 bg-slate-400 h-8 w-[100px] mb-2 md:w-[200px]" />
            <Skeleton className={`animate-pulse h-8 w-[150px] md:w-[150px] dark:bg-slate-200 bg-slate-400 rounded-[4px]`}/>
            <Skeleton className={`animate-pulse h-8 w-[180px] md:w-[180px] dark:bg-slate-200 bg-slate-400 rounded-[4px]`}/>
        </div>
    )
};