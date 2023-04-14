export default function handler(req, res) {
    // invalidate JWT token
    // clear client side jwt token
    // update user's status to logged out
    // redirect user after logging out
    // return error if logout fails

    res.status(200).json({ message: 'log out successful' })
}