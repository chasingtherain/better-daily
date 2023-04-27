import { Skeleton } from "@/components/ui/skeleton"

export default function LoadingFormInput(params) {
    return <div className="my-4 space-y-2">
        <Skeleton className="h-6 w-[350px] md:w-[400px]" />
        {[...Array(3).keys()].map((i) => 
            <Skeleton key={i} className="animate-pulse box-border h-8 my-1 w-full bg-slate-200 w-[350px] md:w-[400px] justify-start text-left font-normal bg-slate-200 border-gray-50"/>
        )}
    </div>
};
