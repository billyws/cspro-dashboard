'use client'

import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts"
import 'apexcharts/dist/apexcharts.css';

export default function DailyProgress(){
    const [chartLoaded, setChartLoaded] = useState(false);

    useEffect(() => {
        import("apexcharts").then(() => setChartLoaded(true));
    }, []);

    const chartData = {
    series: [
        {
            name: "Performance",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },
        {
            name: "Synchronizations",
            data: [100, 71, 23, 25, 82, 85, 88, 91, 120]
        },
        {
            name: "Missing values",
            data: [20, 14, 2, 12, 15, 32, 12, 0, 4]
        }
    ],
    options: {
        chart: {
            height: 350,
            type: "area"
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: "smooth"
        },
        xaxis: {
            type: "datetime",
            categories: [
                "2018-09-19T00:00:00.000Z",
                "2018-09-19T01:30:00.000Z",
                "2018-09-19T02:30:00.000Z",
                "2018-09-19T03:30:00.000Z",
                "2018-09-19T04:30:00.000Z",
                "2018-09-19T05:30:00.000Z",
                "2018-09-19T06:30:00.000Z",
                "2018-09-19T07:30:00.000Z",
                "2018-09-19T08:30:00.000Z"
            ]
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm"
            }
        }
    }
    }



    return (
        <div>
            <div className="grid grid-cols-3 gap-4 mb-2">
                <div className="p-5 my-5 rounded shadow-sm bg-slate-50">
                    <div className="flex flex-col-2 justify-between">
                        <h4 className="text-sm font-light text-gray-950">5,234</h4>
                        <h4 className="text-xs font-light text-green-700">Performance</h4>
                    </div>
                    <div>
                        {/* Insert chartData here */}
                        <ReactApexChart
                            options={chartData.options}
                            series={chartData.series}
                            type="area"
                            height={350}
                        />
                        
                    </div>
                </div>
                <div className="p-5 my-5 rounded shadow-sm bg-slate-50">
                    <div className="flex flex-col-2 justify-between">
                        <h4 className="text-sm font-light text-gray-950">5,234</h4>
                        <h4 className="text-xs font-light text-green-700">Synchronizations</h4>
                    </div>
                    <div>
                    <ReactApexChart
                            options={chartData.options}
                            series={chartData.series}
                            type="area"
                            height={350}
                        />
                    </div>
                </div>
                <div className="p-5 my-5 rounded shadow-sm bg-slate-50">
                    <div className="flex flex-col-2 justify-between">
                        <h4 className="text-sm font-light text-gray-950">5,234</h4>
                        <h4 className="text-xs font-light text-red-700">Missing values</h4>
                    </div>
                    <div>
                         <div>
                         <ReactApexChart
                            options={chartData.options}
                            series={chartData.series}
                            type="area"
                            height={350}
                        />
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}