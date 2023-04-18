import * as React from "react"
 
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

export function EntryCard() {
  return (
    <Card className="md:w-1/2 border-2">
      <CardHeader>
        <CardTitle>Date</CardTitle>
      </CardHeader>
      <CardContent>
          <div className="grid md:w-full items-center gap-3">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">I was thankful for</Label>
              <React.Fragment>
                <div className="text-sm">
                hi there
                </div>
                <Separator className="my-2 bg-slate-200" />
                <div className="text-sm">
                hi there
                </div>
                <Separator className="my-2 bg-slate-200" />
                <div className="text-sm">
                hi there
                </div>
                <Separator className="my-2 bg-slate-200" />
             </React.Fragment>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">These went well</Label>
            <React.Fragment>
                <div className="text-sm">
                hi there
                </div>
                <Separator className="my-2 bg-slate-200" />
                <div className="text-sm">
                hi there
                </div>
                <Separator className="my-2 bg-slate-200" />
                <div className="text-sm">
                hi there
                </div>
                <Separator className="my-2 bg-slate-200" />
             </React.Fragment>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">These didn't go as expected</Label>
              <React.Fragment>
                <div className="text-sm">
                hi there
                </div>
                <Separator className="my-2 bg-slate-200" />
                <div className="text-sm">
                hi there
                </div>
                <Separator className="my-2 bg-slate-200" />
                <div className="text-sm">
                hi there
                </div>
                <Separator className="my-2 bg-slate-200" />
             </React.Fragment>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">I could improve on</Label>
              <React.Fragment>
                <div className="text-sm">
                hi there
                </div>
                <Separator className="my-2 bg-slate-200" />
             </React.Fragment>
            </div>
          </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="border-2">Edit</Button>
      </CardFooter>
    </Card>
  )
}