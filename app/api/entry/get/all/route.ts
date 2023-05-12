import prisma from "@/lib/prisma"
import { Feedback } from "@/types/feedback"
import { User } from "@prisma/client"
import { NextResponse } from "next/server"

export async function GET(req: Request){
    // get user id from FE
    // from db:
    // find all entries in Entry table that belongs to user id
    // return FE with a list of entries
    console.log("entry/get/all called")
    const { searchParams } = new URL(req.url);
    console.log("searchParams: ",searchParams)
    const userEmail = searchParams.params 
    console.log(userEmail)

    // const user = await prisma.user.findUnique({
    // where: {email: userEmail},
    // })
        
    // if(!user){
    //     return NextResponse.json({ message: 'fetch successful'},{status: 422})
    // }
    
    // const allEntries = await prisma.entry.findMany({
    //         where: {authorId: user.id}
    //     })
    //     console.log("allEntries: ",allEntries)
        
    return NextResponse.json({ message: 'fetch successful'},{status: 200});
                
}
            
