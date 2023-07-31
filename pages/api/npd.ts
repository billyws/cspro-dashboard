
// TODO: Fetch data from API Swagger
// TODO: API server has authorization

import { headers } from "next/dist/client/components/headers"

export default async function handler(req, res){

        const username = process.env.SURSOL_API_USERNAME
        const password = process.env.SURSOL_API_PASSWORD
        const workspace = process.env.SURSOL_API_WORKSPACE
    

    const encodedCredentials = Buffer.from(`${username}:${password}:${workspace}`).toString('base64');
    
    // TODO: Check if authorization from the REQUEST is successful
    try {
        const data = await fetch(`${process.env.SURSOL_API_URL}/assignments`, {
            method:'GET',
            headers: {
                'Authorization': `Basic ${encodedCredentials}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        const response = res.status(200).json(data);
        return response

        if(!data.ok) {
            throw new Error (`An error occurred: ${res.status} ${res.statusText}`)
        }
    } catch (error) {
        return null
    }


}