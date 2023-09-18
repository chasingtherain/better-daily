import prisma from "@/lib/prisma"
import { LifeExperienceEntry } from "@/types/lifeExperienceEntry"
import { User } from "@prisma/client"
import { NextResponse } from "next/server"

export async function POST(req: Request){

        const { year, misogiContent, userEmail, adventureContent} = await req.json()

        const user: User | null = await prisma.user.findUnique({
            where: {email: userEmail},
          })

        if (user){
            try {
                const existingRecord = await prisma.lifeExperienceEntry.findFirst({
                    where: {
                        authorId: user?.id, // Foreign key condition
                        year: year
                    },
                })
                if(existingRecord){
                const updatedRecord = await prisma.lifeExperienceEntry.update({
                    where: {
                        id: existingRecord.id, // Use the retrieved id in the where argument
                    },
                    data: {
                        year: year,               
                        misogiContent: misogiContent || "",     
                        adventureContent: adventureContent || [],
                        authorId: user!.id
                    },
                    })
                }
                else{
                const newLifeExperienceEntry = await prisma.lifeExperienceEntry.create({
                    data: {
                        year: year,               
                        misogiContent: misogiContent,     
                        adventureContent: adventureContent,
                        authorId: user!.id
                    }
                });
                }    
                return NextResponse.json({ message: 'life experience entry submitted' })
                
            } catch (error) {
                console.log("Error submitting life experience entry data: ", error)
                return NextResponse.json({message: 'life experience entry submission failed'})
            }
        }
}