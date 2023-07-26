
import Image from "next/image"
import Link from "next/link"
import StatsCounter from "../components/StatsCounter"
import SummaryTable from "../components/SummaryTable"
import DailyProgress from "../components/DailyProgress"
import TopNav from "../components/TopNav"
import { PrismaClient } from "@prisma/client"



// Todo 
// 1. Create a connection to the database to retrieve administrative indicators
// 2. Population the page with the data and store in a state.
// 3. Pass the data as props to children.


export default function Home() {

  //const prisma = new PrismaClient()
  
  // Get cases from db


  return (
    <div>
        <div className="flex flex-row pt-10 justify-between">
            <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-cyan-950">Dashboard</h1>
            <p className="text-sm font-light text-gray-500">
                Data used here are for testing purposes only and do not represent real data collection.
                Any reliance is at your own risk.
            </p>
            </div>
        </div>

      <div className="nsodivider"></div>
      <StatsCounter />
      <DailyProgress/>
      <SummaryTable />

  </div>

  )
}
