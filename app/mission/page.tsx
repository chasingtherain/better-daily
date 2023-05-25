import MissionCard from "@/components/Mission/MissionCard";


export default function Page() {

    const sections = [
        {name: "Memento Mori",description: "At your own funeral, what would you want your family, friends and colleagues to say about your character, contributions and achievements?"},
        {name: "Values",description: "What values do you want to embody in your daily life?"},
        // {name: "",description: "Urgent, Not Important"},
        // {name: "",description: "Not Urgent, Not Important"}
    ]

    return (
        <div className="flex flex-col md:flex-row justify-center items-center mt-5 md:mt-20 gap-8">
            { sections.map(section => <MissionCard key={section.name} section={section}/>) }
        </div>
    )
};