import QuadrantCard from "@/components/FourQuadrants/QuadrantCard"

export default function Page() {
    const quadrants = [
        {name: "Quadrant 1",description: "Urgent, Important"},
        {name: "Quadrant 2",description: "Not Urgent, Important"},
        {name: "Quadrant 3",description: "Urgent, Not Important"},
        {name: "Quadrant 4",description: "Not Urgent, Not Important"}
    ]
    return (
        <div className="flex flex-col md:flex-row justify-center items-center mt-5 md:mt-20 gap-8">
            { quadrants.map(card => <QuadrantCard key={card.name} quad={card}/>) }
        </div>
    )
};
