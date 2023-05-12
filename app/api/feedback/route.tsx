import prisma from "@/lib/prisma"
import { FeedbackData } from "@/types/feedback"
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

        const { feedbackContent, channel, userEmail} = await req.json()

        const user: User | null = await prisma.user.findUnique({
            where: {email: userEmail},
          })

        if (user){
            try {
                const newFeedback: FeedbackData = await prisma.feedback.create({
                    data: {
                        feedbackContent: feedbackContent,
                        channel: channel ? channel : null,
                        authorId: user.id
                },
                });
                return NextResponse.json({ message: 'feedback submitted' })
                
            } catch (error) {
                console.log("Error submitting feedback data: ", error)
                return NextResponse.json({message: 'feedback submission failed'})
            }
        }
}