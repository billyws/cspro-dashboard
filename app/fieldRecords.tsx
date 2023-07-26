'use client'

import { useState, useEffect } from "react"

export default function FieldRecords(){
    const [fieldRecords, setFieldRecords] = useState([])

    useEffect(() => {
        fetch('/api/fieldRecords')
            .then(response => response.json())
            .then(data => setFieldRecords(data))
    }, [])

    return (
        <div>
            <h1>Field Records</h1>
            <ul>
                {fieldRecords.map(fieldRecord => (
                    <li key={fieldRecord.id}>
                        <h2>{fieldRecord.title}</h2>
                        <p>{fieldRecord.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

