export interface ServerProps {
    quote: {
      id: number,
      text: string,
      author: string
    },
    greeting: {
      id: number,
      hello: string,
      language: string
    },
    session: {
      user: {
          name: string,
          email: string,
          image: string,
      },
    },
    focusList: any[]
}