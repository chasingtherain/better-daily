export default function handler(req, res) {
    // connect to db
    // read data from FE
    // find entry that needs to be deleted
        // first find the user
        // next find the specific entry
    // delete data to db
        // if successful, send success response to FE
        // if not successful, send error to FE

    res.status(200).json({ message: 'entry deleted' })
}