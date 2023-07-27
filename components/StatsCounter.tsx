'use client'

import { useState,useEffect } from "react"
import { PrismaClient } from "@prisma/client"


export default function StatsCounter(){
    
    const [stats, setStats] = useState([])

    // Use the useEffect hook to get data from pages/api/stats
    useEffect(() => {
        fetch('/api/stats')
            .then(response => response.json())
            .then(data => setStats(data))
    }, [])
    


    // Format date
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1

    const year = date.getFullYear()
    const formattedDate = `${day}/${month}/${year}`


    return (
        <div>
            <div className="grid grid-cols-4 gap-4 mb-2">
                <div className="p-5 bg-slate-50 rounded">
                    <div className="flex flex-col-2 justify-between">
                        <div>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-950">{stats.length}</h1>
                                <h4 className="text-normal text-gray-600">Household Coverage</h4>
                                <span className="text-xs text-green-600">up on: {formattedDate}</span>
                            </div>
                        </div>
                        <div>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth="1.5" 
                                stroke="green" 
                                className="w-8 h-8">
                                <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>

                        </div>
                    </div>
                </div>

                <div className="p-5 bg-slate-50 rounded">
                    <div className="flex flex-col-2 justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-950">5,332</h1>
                            <h4 className="text-normal text-gray-600">CU Coverage</h4>
                            <span className="text-xs text-green-600">up by 5%</span>
                        </div>
                        <div>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth="1.5" 
                                stroke="green" 
                                className="w-8 h-8">
                                <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>


                        </div>
                    </div>
                </div>
                <div className="p-5 bg-slate-50 rounded">
                <div className="flex flex-col-2 justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-950">36,332</h1>
                            <h4 className="text-normal text-gray-600">Response rate</h4>
                            <span className="text-xs text-red-600">down by 5%</span>
                        </div>
                        <div>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth="1.5" 
                                stroke="green" 
                                className="w-8 h-8">
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>


                        </div>
                    </div>
                </div>
                <div className="p-5 bg-slate-50 rounded">
                <div className="flex flex-col-2 justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-950">532</h1>
                            <h4 className="text-normal text-gray-600">Error rates</h4>
                            <span className="text-xs text-red-600">up by 23%</span>
                        </div>
                        <div>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth="1.5" 
                                stroke="green" 
                                className="w-8 h-8">
                                <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}