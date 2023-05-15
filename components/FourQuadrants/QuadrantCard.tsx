"use client"
import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";

export default function QuadrantCard() {
    const [quadOne, setQuadOne] = useState(['one','two','three','four','five','one','two','three','four','five','one','two','three','four','five'])
    const [userInput, setUserInput] = useState('')

    const handleAddToList = (e) => {
        if(e.key == 'Enter' && e.target.value.trim().length>0){
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
        <ScrollArea className="w-4/5 md:w-[300px] h-[300px] md:h-[400px] rounded-md border border-slate-500 mx-2 mb-2 text-center">
            <Card className="min-h-[400px] mh-fit">
                <CardHeader>
                    <CardTitle>Quadrant X</CardTitle>
                    <CardDescription>Urgent and Important</CardDescription>
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
