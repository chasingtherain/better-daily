import { useSession } from "next-auth/react"
import Link from "next/link"
import { Command } from "lucide-react"
import ActionButton from "../components/ui/ActionButton"
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import { quotes } from "../data/quotes"
import {isBrowser, isMobile} from 'react-device-detect';

export default function Home(props) {
  const { data: session, status } = useSession()
  
  if (session) {
    return (
      <div className="h-screen border-2 border-transparent">
          <p className="text-xl md:text-[35px] mt-20 mb-4 text-center">Welcome back, <span className="font-medium">{session.user.name}</span></p>
          <div className="my-32 md:my-38 mx-[10%] md:mx-[25%] text-center">
              <p className="text-xl md:text-3xl leading-normal font-serif tracking-normal">Get Better Daily, Start Doing.</p>
              <p className="text-xl md:text-4xl leading-normal font-serif tracking-wide italic my-8">{`“${props.quote.text}”`}</p>
              <p className="text-xl md:text-2xl tracking-tight italic mb-10"> {`${props.quote.author}`}</p>
              <ActionButton name="Journal Today" link="/entry"/>
          </div>
      </div>
    )
  }

  if(!session){
    return <>
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
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Command className="mr-2 h-6 w-6" /> Get Better Daily
          </div>
          <div className={isBrowser ? "relative z-20 mt-[100%]" : "relative mb-0"}>
            <blockquote className="space-y-2">
              <p className="text-lg italic">
                The unexamined life is not worth living
              </p>
              <footer className="text-sm">Socrates</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[300px] px-4">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight my-2">
                Introspect Today
              </h1>
              <ActionButton name="Start Journaling"/>
            </div>
            <p className="px-8 text-center text-sm text-muted-foreground">
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
      </>
  }

  }

export async function getServerSideProps(context){
  const session = await getServerSession(context.req, context.res, authOptions)
  const randomNum = Math.floor(Math.random() * quotes.length)
  const chosenQuote = quotes.filter(quote => quote.id === randomNum)[0]

  return {
    props: {
      session,
      quote: chosenQuote,
    },
  }
}
