import { Skeleton } from "@/components/ui/skeleton"

export default function LoadingCards({num}) {
    return <div className="flex flex-wrap justify-center items-center gap-4 mt-10 mb-20">
            {[...Array(num).keys()].map((i) => 
                <Skeleton key={i} className="animate-pulse w-4/5 md:w-[300px] h-[300px] md:h-[400px] rounded-md border border-slate-200 bg-slate-100 mx-2 mb-2" />
            )}
        </div>
};
