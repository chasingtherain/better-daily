import Link from "next/link"
import { Command } from "lucide-react"
import ActionButton from "../components/ui/ActionButton"
import { quotes } from "../data/quotes"
import Checklist from "@/components/Checklist"
import prisma from "@/lib/prisma"
import { currentDate } from "@/utils/date"
import { helloData } from "@/data/hello"
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { generateRand } from "@/utils/numberGenerator"

export default async function Page() {
    
    const greeting = helloData.filter(record => record.id === generateRand(helloData.length))[0]?.hello 
    const quote = quotes.filter(quote => quote.id === generateRand(quotes.length))[0]
    let focusList = null;
    let existingRecord;
    let user;
    
    const session = await getServerSession(authOptions)
    // console.log("session from index: ", session)

    if(session){
        user = await prisma.user.findUnique({
            where: {email: session!.user!.email!},
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
            <p className="text-xl md:text-[35px] mt-20 mb-4 text-center">{`${greeting ?? 'Hello'}, ${session?.user?.name ?? ""}`}</p>
            <p className="text-xl md:text-3xl leading-normal font-serif tracking-normal text-center">Get Better Daily.</p>
            <div className="my-16 md:my-28 mx-[5%] md:mx-[25%] text-center">
                <p className="text-xl md:text-4xl leading-normal font-serif tracking-wide italic my-8">{`“${quote?.text ?? "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you."}”`}</p>
                <p className="text-xl md:text-2xl tracking-tight italic mb-10 md:mb-20"> {`${quote?.author ?? "Steve Jobs"}`}</p>
                {focusList ? <Checklist list={focusList}/> : <ActionButton name="Journal Today" link="/entry"/>}
                
            </div>
        </div>
      )
    }

    if(!session){
        return (
          <div className={`flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0`}>
            <div className="relative h-full flex-col bg-muted p-10 text-white lg:flex">
              <div
                className="absolute inset-0 bg-cover"
                style={{
                  backgroundImage:
                    "url(images/landing/night-man-alone-starry-sky-night-sky-comet-silhouette-3840x2160-8325.jpg)",
                    backgroundPositionX: "-200px", // Specify pixel x position here
                    backgroundPositionY: "-75px", // Specify pixel x position here
                    height: "100vh"
                  }}
              />
              <div className="relative z-5 flex items-center text-lg font-medium">
                <Command className="mr-2 h-6 w-6" /> Get Better Daily
              </div>
              <div className="relative md:z-20 md:mt-[90%] mt-[70%]">
                <blockquote className="space-y-1">
                  <p className="text-lg italic">
                    The unexamined life is not worth living
                  </p>
                  <footer className="text-md italic">- Socrates</footer>
                </blockquote>
              </div>
            </div>
            <div className="lg:p-8">
              <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[300px] px-4">
                <div className="flex flex-col space-y-2 text-center">
                  <h1 className="text-2xl font-semibold tracking-tight md:my-2 z-5 text-white mt-10">
                    Introspect Today
                  </h1>
                  <ActionButton name="Start Journaling"/>
                </div>
                <p className="px-8 text-center text-sm text-muted-foreground z-20 text-white">
                  By proceeding, you agree to our{" "}
                  <Link
                    href="/terms"
                    className="underline underline-offset-4 hover:text-primary"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="underline underline-offset-4 hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        )
      }
    

};