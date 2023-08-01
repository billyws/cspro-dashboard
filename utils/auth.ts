
export default function getAuth() {
    const username = process.env.SURSOL_API_USERNAME
    const password = process.env.SURSOL_API_PASSWORD
    const workspace = process.env.SURSOL_API_WORKSPACE
    const url = process.env.SURSOL_API_URL
    const encodedCredentials = Buffer.from(`${username}:${password}`).toString('base64')

    return {
        username,
        password,
        workspace,
        url,
        encodedCredentials
    }

}

