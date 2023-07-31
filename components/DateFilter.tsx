'use client'

import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export default function DateFilter(){

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    // Handle onChange
    const handleStartChange = (value) => {
      setStartDate(value);
    };

    const handleEndChange = (value) => {
      setEndDate(value);
    };


    return(
        <div className="flex flex-row">
              <div className="flex flex-col">
                <Datepicker 
                    useRange={false} 
                    asSingle={true} 
                    value={startDate} 
                    onChange={handleStartChange} />  
              </div>
              
            </div>
    )
}


