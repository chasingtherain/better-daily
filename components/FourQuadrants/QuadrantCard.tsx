"use client"
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";

type listItem = {
    id: number,
    task: string
}

export default function QuadrantCard({quad}) {
    const [quadrant, setQuadrant] = useState<object[]>([])
    const [userInput, setUserInput] = useState<string>('')
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const stored = localStorage.getItem(quad.name);

        setQuadrant(stored ? JSON.parse(stored) : "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleAdd = (e) => {
        if(e.key == 'Enter' && e.target.value.trim().length>0){
            console.log("added to arr: ", e.target)
            setQuadrant([...quadrant, {"id": quadrant.length ?? 0, "task": e.target.value}])
            // update local storage
            localStorage.setItem(quad.name, JSON.stringify([...quadrant, {"id": quadrant.length ?? 0, "task": e.target.value}]))
            setUserInput('')
        }
        else if (e.target.id == "add" && inputRef!.current!.value?.trim().length>0){
            console.log("added to arr: ", e.target)
            setQuadrant([...quadrant, {"id": quadrant.length ?? 0, "task": inputRef!.current!.value}])
            // update local storage
            localStorage.setItem(quad.name, JSON.stringify([...quadrant, {"id": quadrant.length ?? 0, "task": inputRef!.current!.value}]))
            setUserInput('')
        }
    }
    const handleDeleteFromList = (e) => {
        // console.log(e.target)
        const deletedIndex = Number(e.target.id)
        console.log("deleted: ", deletedIndex,e.target)
        const filteredArr = quadrant.filter((item: listItem) => item.id != deletedIndex)
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
            <Card className="min-h-[400px] mh-fit dark:bg-black dark:text-white">
                <CardHeader>
                    <CardTitle className="font-serif">{quad.name ?? "Quadrant X"}</CardTitle>
                    <CardDescription>{quad.description ?? "Urgent and Important"}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input
                            maxLength={45}
                            className="my-1 hover:cursor-pointer ring-1 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                            placeholder={"Finish feature X"}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyPress={handleAdd}
                            ref={inputRef}
                            value={userInput}
                        />
                        <Button 
                            id="add" 
                            className="text-sm" 
                            onClick={handleAdd}
                            disabled={userInput?.length == 0 }
                        >
                            Add
                        </Button>
                    </div>
                    {
                        quadrant.length ? (quadrant.map((listItem:listItem) => 
                            <Input 
                                readOnly
                                key={listItem.id}
                                id={listItem.id.toString()} 
                                className="hover:dark:bg-gray-700 hover:bg-gray-300 hover:line-through hover:cursor-pointer border-blue-400 my-2 rounded-none" 
                                value= {listItem.task}
                                onClick={handleDeleteFromList}
                            />))
                            : <p className="text-slate-500 mt-4">List is empty, keep it up!</p>
                    }
                </CardContent>
            </Card>
        </ScrollArea>
  )
};
