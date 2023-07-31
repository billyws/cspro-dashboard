
// TODO: Fetch data from API Swagger
// TODO: API server has authorization

export default async function handler(req, res){

        const username = process.env.SURSOL_API_USERNAME
        const password = process.env.SURSOL_API_PASSWORD
        const workspace = process.env.SURSOL_API_WORKSPACE
    

    const encodedCredentials = Buffer.from(`${username}:${password}`).toString('base64');
    
    // TODO: Check if authorization from the REQUEST is successful
    
        const data = await fetch(`http://45.63.29.103/npd/api/v1/assignments`, {
            method:'GET',
            headers: {
                'Authorization': `Basic ${encodedCredentials}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        const response = await data.json()
        const npdData = res.status(200).json(response);
    }
