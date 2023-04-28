import { Skeleton } from "@/components/ui/skeleton"

export default function LoadingFormInput(params) {
    return <div className="my-4 space-y-2">
        <Skeleton className="animate-pulse dark:bg-slate-200 bg-slate-400 h-6 w-[350px] md:w-[400px]" />
        {[...Array(3).keys()].map((i) => 
            <Skeleton key={i} className="animate-pulse dark:bg-slate-200 bg-slate-400 box-border h-8 my-1 w-full w-[350px] md:w-[400px] justify-start text-left font-normal border-gray-50"/>
        )}
    </div>
};
