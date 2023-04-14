export default function handler(req, res) {
    // connect to db
    // read user_id from FE
    // retrieve user's info from db
    // if user info exists in db:
        // return user info to FE
    // else:
        // return error

    res.status(200).json({ message: 'fetch profile successful' })
}