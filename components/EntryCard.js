import React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import EntryDetails from "./EntryDetails"

export function EntryCard({entry}) {
    return (
        <ScrollArea className="w-4/5 md:w-[300px] h-[300px] md:h-[400px] rounded-md border border-slate-500 mx-2 mb-2">
            <Card className="border-none">
                <CardHeader>
                    <CardTitle className="leading-none">{entry.todayDate}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:w-full items-center gap-3">
                            <React.Fragment>
                                <div className="flex flex-col space-y-1.5">
                                    <Label className="font-semibold text-md" htmlFor="name">I was thankful for</Label>
                                    <Separator className="my-2 bg-slate-300" />
                                    {entry.gratefulContent.map((content,index) => 
                                        <EntryDetails key={index} content={content}/>
                                    )}
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label className="font-semibold text-md" htmlFor="name">Today I focused on</Label>
                                    <Separator className="my-2 bg-slate-300" />
                                    {entry.focusContent.map((content,index) => 
                                        <EntryDetails key={index} content={content}/>
                                    )}
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label className="font-semibold text-md" htmlFor="name">These went well yesterday</Label>
                                    <Separator className="my-2 bg-slate-300" />
                                    {entry.wentWellContent.map((content,index) => (
                                        <EntryDetails key={index} content={content}/>
                                    ))}
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label className="font-semibold text-md" htmlFor="name">These didn&apos;t go well yesterday</Label>
                                    <Separator className="my-2 bg-slate-300" />
                                    {entry.notSoWellContent.map((content,index) => (
                                        <EntryDetails key={index} content={content}/>
                                    ))}
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label className="font-semibold text-md" htmlFor="name">I could improve on</Label>
                                    <Separator className="my-2 bg-slate-300" />
                                    <EntryDetails content={entry.improvementContent[0]}/>
                                </div>
                            </React.Fragment>
                    </div>
                </CardContent>
            </Card>
        </ScrollArea>
    )
}