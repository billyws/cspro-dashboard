'use client'

import { useState, useEffect } from 'react'


export default function SyncActivites(){
    const [syncActivities, setSyncActivities] = useState([])
    const [MilneBay, setMilneBay] = useState([])
    const [Morobe, setMorobe] = useState([])

    async function getSyncActivities(){
        try {
            const response = await fetch("/api/syncactivities")

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const data = await response.json()

            // Convert this SQL statement - SELECT * FROM `level-1` WHERE s_province = 5
            // to a JavaScript statement

            const MilneBay = data.filter((syncActivity) => syncActivity.s_province === 5)
            const Morobe = data.filter((syncActivity) => syncActivity.s_province === 12)

            setSyncActivities(data)
            setMilneBay(MilneBay)
            setMorobe(Morobe)


        } catch (error) {
            console.error('Failed to fetch data:', error)
        }
    }

    useEffect(()=> {
        getSyncActivities()
    }, [])




    return (
        <div className="col-span-1 p-5 bg-slate-50 rounded">
            <h1 className="text-2xl font-bold text-cyan-950">Sync Activities</h1>
            <p className="text-sm font-light text-gray-500">
                Show the sync activities of the each province
            </p>
            <div className="flex flex-col mt-5">
                    <h4 className="text-xs font-light text-gray-950">Milne Bay Province</h4>
                    <h4 className="text-xl font-light text-green-700">298</h4>
                <div className="flex flex-col">
                    <h4 className="text-xs font-light text-gray-950">Morobe</h4>
                    <h4 className="text-xl font-light text-green-700">55</h4>
                </div>
            </div>
        </div>
    )
}

