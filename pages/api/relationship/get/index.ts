import prisma from '../../../../lib/prisma'

export default async function handler(req, res) {
    // get user id from FE
    // from db:
        // find all entries in Entry table that belongs to user id
    // return FE with a list of entries
    const { params } = req.query
    const user = await prisma.user.findUnique({
        where: {email: params},
      })

    if(!user){
        res.status(422).json({ message: 'failed to find user'})
    }
    else{
        const allLoveLangEntries = await prisma.loveLanguageEntry.findMany({
            where: {authorId: user?.id}
        })
        
        console.log("allLoveLangEntries: ",allLoveLangEntries)
        
        res.status(200).json({ message: 'fetch successful', entries: allLoveLangEntries })
    }
}
  