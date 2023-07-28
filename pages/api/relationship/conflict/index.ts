import { LoveLanguageEntry } from '@prisma/client'
import prisma from '../../../../lib/prisma'

export default async function handler(req, res) {
    // read data from FE
    // connect to db
        // find user's data in db
        //
    // post data to db
        // if successful, send success response to FE
        // if not successful, send error to FE

    const { userEmail, selectedDate,loveLanguageValue} = req.body
    console.log("/api/relationship/post/ called")

    console.log(userEmail, selectedDate,loveLanguageValue)

    const user = await prisma.user.findUnique({
        where: {email: userEmail},
    })

    if(!user){
        res.status(422).json({ message: 'failed to find user'})
    }
    else{
      const existingRecord = await prisma.loveLanguageEntry.findFirst({
          where: {
            authorId: user?.id, // Foreign key condition
            todayDate: selectedDate
          },
      })
        console.log("existingRecord: ", existingRecord)
        console.log("user: ", user)
        if(existingRecord){
          const updatedRecord = await prisma.loveLanguageEntry.update({
              where: {
                id: existingRecord.id, // Use the retrieved id in the where argument
              },
              data: {
                [loveLanguageValue]: 1
              },
            })
        }
        else{
          const newRecord:LoveLanguageEntry = await prisma.loveLanguageEntry.create({
            data: {
              service: loveLanguageValue == "service" ? 1 : 0,
              gift: loveLanguageValue == "gift" ? 1 : 0,
              touch: loveLanguageValue == "touch" ? 1 : 0,
              time: loveLanguageValue == "time" ? 1 : 0,
              words: loveLanguageValue == "words" ? 1 : 0,
              todayDate: selectedDate,
              authorId: user!.id
            }
          });
        }    
      res.status(200).json({ message: 'love language entry posted' })
    }
   
}
  