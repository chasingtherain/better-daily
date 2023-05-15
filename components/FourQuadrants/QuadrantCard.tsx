"use client"
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";

export default function QuadrantCard() {
    const [quadOne, setQuadOne] = useState(['one','two','three','four','five'])
    const [userInput, setUserInput] = useState('')

    const handleAddToList = (e) => {
        if(e.key == 'Enter'){
            console.log("added to arr: ", e.target.value)
            setQuadOne([...quadOne,e.target.value])
            setUserInput('')
        }
    }
    const handleDeleteFromList = (e) => {
        const deletedIndex = Number(e.target.id)
        console.log("deleted: ", deletedIndex)
        const filteredArr = quadOne.filter((_, index) => index != deletedIndex)
        setQuadOne([...filteredArr])
    }

    return (
        <ScrollArea className="w-4/5 md:w-[300px] h-[300px] md:h-[400px] rounded-md border border-slate-500 mx-2 mb-2">
            <Card>
            <CardHeader>
                <CardTitle>Quadrant X</CardTitle>
                <CardDescription>Urgent and Important</CardDescription>
            </CardHeader>
            <CardContent>
                <Input
                    maxLength={45}
                    className="my-1"
                    placeholder={"placeholder here"}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={handleAddToList}
                    value={userInput}
                />
                {quadOne.map((listItem,index) => 
                    <Input 
                        readOnly
                        key={index}
                        id={String(index)} 
                        className="hover:bg-gray-100 hover:line-through border-pink-100 rounded-none" 
                        value= {listItem}
                        onClick={handleDeleteFromList}
                    />)
                }
            </CardContent>
            </Card>
        </ScrollArea>
  )
};
