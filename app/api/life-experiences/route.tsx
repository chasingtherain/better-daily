import prisma from "@/lib/prisma"
import { LifeExperienceEntry } from "@/types/lifeExperienceEntry"
import { User } from "@prisma/client"
import { NextResponse } from "next/server"

export async function POST(req: Request){
    // connect to db
    // read user_id from FE
    // retrieve user's info from db
    // if user info exists in db:
        // write to db on feedback
    // else:
        // return error

        const { year, misogiContent, userEmail, adventureContent} = await req.json()

        const user: User | null = await prisma.user.findUnique({
            where: {email: userEmail},
          })

        if (user){
            try {
                const newLifeExperienceEntry: LifeExperienceEntry = await prisma.lifeExperienceEntry.create({
                    data: {
                        year: year,               
                        misogiContent: misogiContent,     
                        adventureContent: adventureContent
                    }
                });
                return NextResponse.json({ message: 'life experience entry submitted' })
                
            } catch (error) {
                console.log("Error submitting feedback data: ", error)
                return NextResponse.json({message: 'feedback submission failed'})
            }
        }
}