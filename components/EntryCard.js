import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useSession } from "next-auth/react"
import React, { useEffect, useState } from "react"

export function EntryCard() {
    const { data: session, status } = useSession()
    const [entries, setEntries] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
    // Fetch data from the database here
    const fetchData = async () => {
        try {
            const response = await fetch(`/api/entry/get/all?params=${session.user.email}`);
            const jsonData = await response.json();

            setEntries(jsonData.entries);
            setIsLoading(false)
        } 
        catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
    }, []); // Empty dependency array to run effect only on component mount

    return (
    <Card className="md:w-1/2 border-2">
        <CardHeader>
        <CardTitle>Date</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="grid md:w-full items-center gap-3">
                {!isLoading && entries?.map((entry) => {
                    <React.Fragment>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">I was thankful for</Label>
                            <React.Fragment>
                            <div className="text-sm">
                                {entry.gratefulContent[0]}
                            </div>
                            <Separator className="my-2 bg-slate-200" />
                            <div className="text-sm">
                                {entry.gratefulContent[1]}
                            </div>
                            <Separator className="my-2 bg-slate-200" />
                            <div className="text-sm">
                                {entry.gratefulContent[2]}
                            </div>
                            <Separator className="my-2 bg-slate-200" />
                            </React.Fragment>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">These went well</Label>
                        <React.Fragment>
                            <div className="text-sm">
                                {entry.wentWellContent[0]}
                            </div>
                            <Separator className="my-2 bg-slate-200" />
                            <div className="text-sm">
                                {entry.wentWellContent[1]}
                            </div>
                            <Separator className="my-2 bg-slate-200" />
                            <div className="text-sm">
                                {entry.wentWellContent[2]}
                            </div>
                            <Separator className="my-2 bg-slate-200" />
                            </React.Fragment>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">These didn't go as expected</Label>
                            <React.Fragment>
                            <div className="text-sm">
                                {entry.notSoWellContent[0]}
                            </div>
                            <Separator className="my-2 bg-slate-200" />
                            <div className="text-sm">
                                {entry.notSoWellContent[1]}
                            </div>
                            <Separator className="my-2 bg-slate-200" />
                            <div className="text-sm">
                                {entry.notSoWellContent[2]}
                            </div>
                            <Separator className="my-2 bg-slate-200" />
                            </React.Fragment>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">I could improve on</Label>
                            <React.Fragment>
                            <div className="text-sm">
                                {entry.improvementContent[0]}
                            </div>
                            <Separator className="my-2 bg-slate-200" />
                            </React.Fragment>
                        </div>
                    </React.Fragment>
                })}
            </div>
        </CardContent>
        <CardFooter className="flex justify-between">
        <Button className="border-2">Edit</Button>
        </CardFooter>
    </Card>
    )
}