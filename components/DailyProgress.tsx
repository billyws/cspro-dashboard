'use client'

import { useState, useEffect } from 'react'

export default function DailyProgress(){
    const [npd, setNpd] = useState([])

    async function getNpdData(){

        const response = await fetch("/api/ndp")
        const data = await response.json()
        
        setNpd(data)

    }

    useEffect(()=> {
        getNpdData()
    }, [])
    
    
    return (
        <div>
            <div className="grid grid-cols-3 gap-4 mb-2">
                <div className="p-5 my-5 rounded shadow-sm bg-slate-50">
                    <div className="flex flex-col-2 justify-between">
                        <h4 className="text-sm font-light text-gray-950">{npd.length}</h4>
                        <h4 className="text-xs font-light text-green-700">Performance</h4>
                    </div>
                    <div>
                    Insert charts here
                        
                    </div>
                </div>
                <div className="p-5 my-5 rounded shadow-sm bg-slate-50">
                    <div className="flex flex-col-2 justify-between">
                        <h4 className="text-sm font-light text-gray-950">5,234</h4>
                        <h4 className="text-xs font-light text-green-700">Synchronizations</h4>
                    </div>
                    <div>
                   Insert charts here
                    </div>
                </div>
                <div className="p-5 my-5 rounded shadow-sm bg-slate-50">
                    <div className="flex flex-col-2 justify-between">
                        <h4 className="text-sm font-light text-gray-950">5,234</h4>
                        <h4 className="text-xs font-light text-red-700">Missing values</h4>
                    </div>
                    <div>
                         <div>
                         Insert charts here
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}