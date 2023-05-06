export interface ServerProps {
    quote: {
      id: number,
      text: string,
      author: string
    },
    session: {
      user: {
          name: string,
          email: string,
          image: string,
      },
    },
    focusList: string[]
}