
import getAuth from "../../utils/auth"

export default async function handler(req, res){

    const { url, encodedCredentials } = getAuth()
    
        const data = await fetch(`${url}/assignments`, {
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
