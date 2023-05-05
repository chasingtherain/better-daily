import prisma from "@/lib/prisma"
import { Feedback } from "@/types/feedback"
import { User } from "@prisma/client"

export default async function handler(req, res) {
    // connect to db
    // read user_id from FE
    // retrieve user's info from db
    // if user info exists in db:
        // write to db on feedback
    // else:
        // return error

        const { feedbackContent, channel, userEmail} = req.body

        console.log(req.body)

        const user: User | null = await prisma.user.findUnique({
            where: {email: userEmail},
          })

        if (user){
            try {
                const newFeedback: Feedback = await prisma.feedback.create({
                    data: {
                        feedbackContent: feedbackContent,
                        channel: channel ? channel : null,
                        authorId: user.id
                },
                });

                res.status(200).json({ message: 'feedback submitted'})
                
            } catch (error) {
                console.log("Error submitting feedback data: ", error)
                res.status(500).json({message: 'feedback submission failed'})
            }
        }
}