"use client"
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";

export default function QuadrantCard({quad}) {
    const [quadrant, setQuadrant] = useState<string[]>([])
    const [userInput, setUserInput] = useState<string>('')

    useEffect(() => {
        const stored = localStorage.getItem(quad.name);

        setQuadrant(stored ? JSON.parse(stored) : "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleAddToList = (e) => {
        if(e.key == 'Enter' && e.target.value.trim().length>0){
            console.log("added to arr: ", e.target.value)
            setQuadrant([...quadrant,e.target.value])
            // update local storage
            localStorage.setItem(quad.name, JSON.stringify([...quadrant,e.target.value]))
            setUserInput('')
        }
    }
    const handleDeleteFromList = (e) => {
        const deletedIndex = Number(e.target.id)
        console.log("deleted: ", deletedIndex)
        const filteredArr = quadrant.filter((_, index) => index != deletedIndex)
        setQuadrant([...filteredArr])

        if(filteredArr.length){
            localStorage.setItem(quad.name, JSON.stringify([...filteredArr]))
        }
        else{
            localStorage.removeItem(quad.name)
        }
    }

    return (
        <ScrollArea className="w-4/5 md:w-[300px] h-[350px] md:h-[400px] rounded-md border border-slate-500 mx-2 mb-2 text-center">
            <Card className="min-h-[400px] mh-fit">
                <CardHeader>
                    <CardTitle>{quad.name ?? "Quadrant X"}</CardTitle>
                    <CardDescription>{quad.description ?? "Urgent and Important"}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Input
                        maxLength={45}
                        className="my-1"
                        placeholder={"Add a task"}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyPress={handleAddToList}
                        value={userInput}
                    />
                    {
                        quadrant.length ? (quadrant.map((listItem,index) => 
                            <Input 
                                readOnly
                                key={index}
                                id={String(index)} 
                                className="hover:bg-gray-100 hover:line-through border-blue-400 my-2 rounded-none" 
                                value= {listItem}
                                onClick={handleDeleteFromList}
                            />))
                            : <p className="text-slate-500 mt-4">List is empty, keep it up!</p>
                    }
                </CardContent>
            </Card>
        </ScrollArea>
  )
};
