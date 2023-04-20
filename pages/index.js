import { useSession } from "next-auth/react"
import Link from "next/link"
import { Command } from "lucide-react"
import ActionButton from "../components/ui/ActionButton"
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"


export default function Home() {
  const { data: session, status } = useSession()

  if (session) {
    return (
      <>
        <h1>Protected Page</h1>
        <p>Welcome {session.user.name}</p>
        <p>You can view this page because you are signed in.</p>
      </>
    )
  }
  // return <p>Access Denied</p>
  if(!session){
    return (
      <>
        <div className="md:hidden">
          {/* <Image
            src="/examples/authentication-light.png"
            width={1280}
            height={843}
            alt="Authentication"
            className="block dark:hidden"
          />
          <Image
            src="/examples/authentication-dark.png"
            width={1280}
            height={843}
            alt="Authentication"
            className="hidden dark:block"
          /> */}
        </div>
        <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
  
          <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
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
            <div className="relative z-20 mt-[100%]">
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
                  Start My Journey
                </h1>
                <ActionButton name="Continue"/>
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
    )
  }
}

export async function getServerSideProps(context){
  const session = await getServerSession(context.req, context.res, authOptions)
  console.log("session from gssp: ", session)

  return {
    props: {
      session,
    },
  }
}
