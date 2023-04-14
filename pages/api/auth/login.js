export default function handler(req, res) {
    // email login
        // read email and pw input
        // use bcrypt to hash pw input and compare with db
        // if match, return successful response that includes:
            // send jwt token to FE for subsequent requests

        // else: return error

    // social login
        // communicate with social platform API
            // if social API returns success:
                // return successful response that includes:
                    // send jwt token to FE for subsequent requests
            // else:
                // return error

    res.status(200).json({ message: 'logged in successful' })
}