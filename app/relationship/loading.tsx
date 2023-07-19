import LoadingCards from "@/components/loadingSkeleton/LoadingCards";


export default function Loading() {
    
    // console.log("quad loading processed")
    return (
        <div className="mt-10">
            <LoadingCards num={4} />
        </div>
    )
};