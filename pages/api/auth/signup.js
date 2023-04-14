export default function handler(req, res) {
    // email signup
        // read email and pw input
        // use bcrypt to hash pw input
        // update db with these fields:
          // email, hashed pw, createdAt, updatedAt
        // return successful response that includes:
            // send jwt token to FE for subsequent requests

        // else: return error

    // social login
        // communicate with social platform API
            // if social API returns success:
                // return successful response that includes:
                    // send jwt token to FE for subsequent requests
            // else:
                // return error


  res.status(200).json({ name: 'John Doe' })
}
