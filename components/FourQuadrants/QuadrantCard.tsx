"use client"
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Table,TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

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
                {quadOne.map((listItem,index) => <p key={index}>{listItem}</p>)}
            </CardContent>
            </Card>
        </ScrollArea>
  )
};
