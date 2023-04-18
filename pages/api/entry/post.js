import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
    // read data from FE
    // connect to db
        // find user's data in db
        //
    // post data to db
        // if successful, send success response to FE
        // if not successful, send error to FE

    const {grateful, focus, wentWell, notWell,improve, userEmail,selectedDate} = req.body
    console.log(req.body)
    // const user = await prisma.user.findUnique({
    //     where: {email: userEmail},
    //   })

    // console.log(user)
    // if(!user){
    //     res.status(422).json({ message: 'failed to find user'})
    // }

    // try {
    //     const postEntry = await prisma.entry.upsert({
    //         where: {
    //             authorId: user.id,
    //             todayDate: 'viola@prisma.io',
    //         },
    //         update: {
    //             name: 'Viola the Magnificent',
    //         },
    //         create: {
    //             email: 'viola@prisma.io',
    //             name: 'Viola the Magnificent',
    //         },
    //     })
          
          
    // } 
    // catch (error) {
        
    // }

    res.status(200).json({ message: 'entry posted' })
}
  