import prisma from '../../../../lib/prisma'

export default async function handler(req, res) {
    // read data from FE
    // connect to db
        // find user's data in db
        //
    // post data to db
        // if successful, send success response to FE
        // if not successful, send error to FE

    const {grateful, focus, userEmail,wentWell, notWell, improve ,selectedDate, effortRating} = req.body

    console.log(req.body, "effortRating: ", effortRating, typeof(effortRating))
    const user = await prisma.user.findUnique({
        where: {email: userEmail},
    })

    // console.log(user)
    if(!user){
        res.status(422).json({ message: 'failed to find user'})
    }
    else{
      const existingRecord = await prisma.entry.findFirst({
          where: {
            authorId: user?.id, // Foreign key condition
            todayDate: selectedDate
          },
      })
        // console.log("existingRecord: ", existingRecord)
        // console.log("user: ", user)
        if(existingRecord){
          const updatedRecord = await prisma.entry.update({
              where: {
                id: existingRecord.id, // Use the retrieved id in the where argument
              },
              data: {
                  gratefulContent: grateful,
                  focusContent: focus,
                  wentWellContent: wentWell,
                  notSoWellContent: notWell,
                  improvementContent: improve,
                  effortRating: effortRating
              },
            })
        }
        else{
          const newRecord = await prisma.entry.create({
              data: {
                // Insert data
                todayDate: selectedDate,
                gratefulContent: grateful,
                focusContent: focus,
                wentWellContent: wentWell,
                notSoWellContent: notWell,
                improvementContent: improve,
                effortRating: effortRating,
                authorId: user!.id
              },
            });
        }    
      res.status(200).json({ message: 'entry posted' })
    }
   
}
  