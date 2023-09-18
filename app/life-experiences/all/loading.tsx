import LoadingCards from "@/components/loadingSkeleton/LoadingCards";
import { Skeleton } from "@/components/ui/skeleton";


export default function Loading() {
    
    return (
        <div className="flex flex-col items-center gap-5 mt-10 md:mt-20 px-12 py-12">
            <Skeleton className={`animate-pulse h-5 w-[180px] md:w-[320px] dark:bg-slate-200 bg-slate-400 rounded-[4px]`}/>
            <Skeleton className="animate-pulse dark:bg-slate-200 bg-slate-400 h-16 w-[180px] mb-2 md:w-[320px]" />
            
            <Skeleton className={`animate-pulse h-5 w-[180px] md:w-[320px] dark:bg-slate-200 bg-slate-400 rounded-[4px]`}/>
            <Skeleton className="animate-pulse dark:bg-slate-200 bg-slate-400 h-16 w-[180px] mb-2 md:w-[320px]" />
            
            <Skeleton className={`animate-pulse h-12 w-[150px] md:w-[300px] dark:bg-slate-200 bg-slate-400 rounded-[4px]`}/>
        </div>
    )
};