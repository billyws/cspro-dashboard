'use client'

import { useState, useEffect } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import LocationMarker from '../utils/LocationMarker'
import 'leaflet/dist/leaflet.css'
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

interface Household {
    s_gps3_latitude?: number;
    s_gps3_longitude?: number;
    s_interviewer_code?: string;
}

const SummaryMap = () => {
    const [households, setHouseholds] = useState<Household[]>([])

    async function getHouseholdsData() {
        try {
            const response = await fetch("/api/hhcordinates")

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const data = await response.json() as Household[]
            setHouseholds(data)

        } catch (error) {
            console.error('Failed to fetch data:', error)
        }
    }

    useEffect(() => {
        getHouseholdsData()
    }, [])

    const width = {
        width: "100%",
        height: "500px"
    }

    return (
        <div className="col-span-3 p-5 bg-slate-50 rounded">
            <MapContainer center={[-6.23333, 150.666664]} zoom={6} style={width} scrollWheelZoom={true} zoomAnimation={true}>
                <TileLayer
                    attribution='&copy; Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                />
                {
                    households.map((household, index) => (
                        household && household.s_gps3_latitude && household.s_gps3_longitude ?
                            <LocationMarker
                                key={index}
                                position={[household.s_gps3_latitude, household.s_gps3_longitude]}
                                interviewerCode={household.s_interviewer_code}
                            /> : null
                    ))
                }
            </MapContainer>
        </div>
    )
}

export default SummaryMap;
