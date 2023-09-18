import React from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import EntryDetails from "../EntryDetails"


export function LifeExperienceEntryCard({entry}) {
    return (
        <ScrollArea className="w-4/5 md:w-[300px] h-[300px] md:h-[350px] rounded-md border border-slate-500 mx-2 mb-2 ">
            <Card className="border-none dark:bg-black dark:text-gray-300">
                <CardHeader>
                    <CardTitle className="leading-none">{entry.year}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:w-full items-center gap-3">
                            <React.Fragment>
                                <div className="flex flex-col space-y-1">
                                    <Label className="font-semibold text-md" htmlFor="name">Misogi</Label>
                                    <Separator className="my-2 bg-slate-300" />
                                    <EntryDetails key={entry.year} content={entry.misogiContent}/>
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <Label className="font-semibold text-md" htmlFor="name">Mini Adventures</Label>
                                    <Separator className="my-2 bg-slate-300" />
                                    {entry.adventureContent.map((content,index) => 
                                        <EntryDetails key={index} content={content}/>
                                    )}
                                </div>
                            </React.Fragment>
                    </div>
                </CardContent>
            </Card>
        </ScrollArea>
    )
}