

export default function handler(req, res) {
    // connect to db
    // read and reorganize data from FE
    // post data to db
        // if successful, send success response to FE
        // if not successful, send error to FE

    res.status(200).json({ message: 'entry posted' })
}
  