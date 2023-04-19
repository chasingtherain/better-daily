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
import React from "react"

export function EntryCard({entry}) {
    return (
    <Card className="w-4/5 md:w-[400px] h-[400px] border-2 my-4">
        <CardHeader>
        <CardTitle>{entry.todayDate}</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="grid md:w-full items-center gap-3">
                    <React.Fragment>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">I was thankful for</Label>
                            <Separator className="my-2 bg-slate-200" />
                            {entry.gratefulContent.map((content) => 
                                <React.Fragment key={content}>
                                    <div className="text-sm">
                                        {content}
                                    </div>
                                </React.Fragment>
                            )}
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">These went well</Label>
                            <Separator className="my-2 bg-slate-200" />
                            {entry.wentWellContent.map(content => (
                                <React.Fragment key={content}>
                                    <div className="text-sm" >
                                        {content}
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">These didn't go as expected</Label>
                            <Separator className="my-2 bg-slate-200" />
                            {entry.notSoWellContent.map((content) => {
                                <React.Fragment key={content}>
                                    <div className="text-sm">
                                        {content}
                                    </div>
                                </React.Fragment>
                            })}
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">I could improve on</Label>
                            <Separator className="my-2 bg-slate-200" />
                            <React.Fragment>
                            <div className="text-sm">
                                {entry.improvementContent[0]}
                            </div>
                            </React.Fragment>
                        </div>
                    </React.Fragment>
            </div>
        </CardContent>
        <CardFooter className="flex justify-between">
        <Button className="border-2">Edit</Button>
        </CardFooter>
    </Card>
    )
}