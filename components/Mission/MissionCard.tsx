"use client"
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";

export default function MissionCard({section}) {
    return(        
    <ScrollArea className="w-4/5 md:w-[600px] h-[350px] md:h-[400px] rounded-md border border-slate-500 mx-2 mb-2 text-center">
        <Card className="min-h-[400px] mh-fit dark:bg-black dark:text-white">
            <CardHeader>
                <CardTitle className="font-serif">{section.name}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex w-full items-center space-x-2 border-2">
                    <Input
                        maxLength={45}
                        className="my-1 hover:cursor-pointer ring-1 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                        placeholder={"e.g. Jane was generous with her knowledge"}
                        // onChange={(e) => setUserInput(e.target.value)}
                        // onKeyPress={handleAdd}
                        // ref={inputRef}
                        // value={userInput}
                    />
                    <Button 
                        id="add" 
                        className="text-sm" 
                        // onClick={handleAdd}
                        // disabled={userInput?.length == 0 }
                    >
                        Add
                    </Button>
                </div>
                {
                    // quadrant.length ? (quadrant.map((listItem:listItem) => 
                        <Input 
                            readOnly
                            // key={listItem.id}
                            // id={listItem.id.toString()} 
                            className="hover:dark:bg-gray-700 hover:bg-gray-300 hover:line-through hover:cursor-pointer border-blue-400 my-2 rounded-none" 
                            value="hi there"
                            // value= {listItem.task}
                            // onClick={handleDeleteFromList}
                        />
                        // ))
                        // : <p className="text-slate-500 mt-4">List is empty, keep it up!</p>
                }
            </CardContent>
        </Card>
    </ScrollArea>)
};
