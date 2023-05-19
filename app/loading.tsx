import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return(       
        <div className="flex flex-col items-center gap-5 mt-20">
            <Skeleton className="animate-pulse dark:bg-slate-200 bg-slate-400 h-8 w-[150px] mb-2 md:w-[400px]" />
            <Skeleton className={`animate-pulse h-8 w-[200px] md:w-[350px] dark:bg-slate-200 bg-slate-400 rounded-[4px]`}/>
            <Skeleton className={`animate-pulse mt-20 h-8 w-[200px] md:w-[380px] dark:bg-slate-200 bg-slate-400 rounded-[4px]`}/>
            <Skeleton className={`animate-pulse h-8 w-[200px] md:w-[360px] dark:bg-slate-200 bg-slate-400 rounded-[4px]`}/>
            <Skeleton className={`animate-pulse h-8 w-[200px] md:w-[340px] dark:bg-slate-200 bg-slate-400 rounded-[4px]`}/>
            <Skeleton className={`animate-pulse mt-20 h-8 w-[140px] md:w-[280px] dark:bg-slate-200 bg-slate-400 rounded-[4px]`}/>
            <Skeleton className={`animate-pulse h-8 w-[180px] md:w-[380px] dark:bg-slate-200 bg-slate-400 rounded-[4px]`}/>
            <Skeleton className={`animate-pulse h-8 w-[180px] md:w-[380px] dark:bg-slate-200 bg-slate-400 rounded-[4px]`}/>
            <Skeleton className={`animate-pulse h-8 w-[180px] md:w-[380px] dark:bg-slate-200 bg-slate-400 rounded-[4px]`}/>
        </div>
    )
};