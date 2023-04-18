import prisma from '../../../../lib/prisma'

export default async function handler(req, res) {
    // read data from FE
    // connect to db
        // find user's data in db
        //
    // post data to db
        // if successful, send success response to FE
        // if not successful, send error to FE

    const {wentWell, notWell, improve, userEmail,selectedDate} = req.body

    console.log(req.body)
    const user = await prisma.user.findUnique({
        where: {email: userEmail},
      })

    // console.log(user)
    if(!user){
        res.status(422).json({ message: 'failed to find user'})
    }
    
    const existingRecord = await prisma.entry.findFirst({
        where: {
            authorId: user.id, 
            todayDate: selectedDate
        },
      })

      if(existingRecord){
        const updatedRecord = await prisma.entry.update({
            where: {
              id: existingRecord.id, // Use the retrieved id in the where argument
            },
            data: {
                wentWellContent: wentWell,
                notSoWellContent: notWell,
                improvementContent: improve,
            },
          })
      }
      else{
        const newRecord = await prisma.entry.create({
            data: {
              // Insert data
              todayDate: selectedDate,
              wentWellContent: wentWell,
              notSoWellContent: notWell,
              improvementContent: improve,
              authorId: user.id
            },
          });
      }    
    res.status(200).json({ message: 'entry posted' })
}
  