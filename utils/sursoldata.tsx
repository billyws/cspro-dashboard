
// TODO: Fetch data from API Swagger
// TODO: API server has authorization

import { headers } from "next/dist/client/components/headers"

export default async function getSurSolData(){
    const swaggerConnect = {
        username: process.env.SURSOL_API_USERNAME,
        password:process.env.SURSOL_API_PASSWORD,
        workspace:process.env.SURSOL_API_WORKSPACE
    }

    // TODO: Check if authorization from the REQUEST is successful
    
    const data = await fetch(`${process.env.SURSOL_API_URL}/assignments`, {
        method:'GET',
        headers: {
            'Authorization': `Basic ${swaggerConnect}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    })
    const response = await data.json()

}