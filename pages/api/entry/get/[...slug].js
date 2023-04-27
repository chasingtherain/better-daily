import prisma from '../../../../lib/prisma'

export default async function handler(req, res) {
    // get user id from FE
    // from db:
        // find all entries in Entry table that belongs to user id
    // return FE with a list of entries
    const { params } = req.query
    console.log("req.query: ",req)
    // const user = await prisma.user.findUnique({
    //     where: {email: params},
    //   })

    // if(!user){
    //     res.status(422).json({ message: 'failed to find user'})
    // }
    
    // const singleEntry = await prisma.entry.findFirst({
    //     where: {
    //         authorId: user.id,
    //         AND: {
    //             todayDate: date
    //         }
    //     }
    // })
    // console.log("single entry: ", singleEntry)
    
    // if(singleEntry){
    //     res.status(200).json({ message: 'entry exist and fetched', entry: singleEntry })
    // }
    // else{
    //     res.status(200).json({ message: 'entry does not exist', entry: singleEntry })
    // }

}
  