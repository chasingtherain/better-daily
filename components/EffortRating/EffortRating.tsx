import { useMemo } from "react";
import { Progress } from "../ui/progress";

export default function EffortRating({averageScore}) {
    
    return (
        <Progress 
            value={averageScore/4 * 100}
            className="w-1/2 md:w-1/6 dark:border-white border-2"
        />
    )
};
