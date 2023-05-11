import Link from "next/link"
import { Command } from "lucide-react"
import ActionButton from "../components/ui/ActionButton"
import { quotes } from "../data/quotes"
import Checklist from "@/components/Checklist"
import prisma from "@/lib/prisma"
import { currentDate } from "@/utils/date"
import { helloData } from "@/data/hello"
import { generateRand } from "@/utils/numberGenerator"
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"

export default async function Page() {
    
    const greeting = helloData.filter(record => record.id === generateRand(helloData.length))[0]?.hello 
    const quote = quotes.filter(quote => quote.id === generateRand(quotes.length))[0]
    let focusList = null;
    let existingRecord = null
    let user = null
    
    const session = await getServerSession(authOptions)
    // console.log("session from index: ", session)

    if(session){
        user = await prisma.user.findUnique({
            where: {email: session.user.email},
          })
    
    }
    
    if(user){
        existingRecord = await prisma.entry.findFirst({
            where: {
                authorId: user.id, // Foreign key condition
                todayDate: currentDate.toDateString()
            },
        })
    }

    if(existingRecord){
        focusList = existingRecord.focusContent.map(record => record)
    }

    if (session) {
      return (
        <div className="h-screen border-2 border-transparent">
            <p className="text-xl md:text-[35px] mt-20 mb-4 text-center">{`${greeting ?? 'Hello'}, ${session.user.name ?? ""}`}</p>
            <p className="text-xl md:text-3xl leading-normal font-serif tracking-normal text-center">Get Better Daily.</p>
            <div className="my-16 md:my-28 mx-[5%] md:mx-[25%] text-center">
                <p className="text-xl md:text-4xl leading-normal font-serif tracking-wide italic my-8">{`“${quote?.text ?? "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you."}”`}</p>
                <p className="text-xl md:text-2xl tracking-tight italic mb-10 md:mb-20"> {`${quote?.author ?? "Steve Jobs"}`}</p>
                {focusList ? <Checklist list={focusList}/> : <ActionButton name="Journal Today" link="/entry"/>}
                
            </div>
        </div>
      )
    }

};
