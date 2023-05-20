import React from "react"
import Link from "next/link"
import StatsCounter from "../components/StatsCounter"
import SummaryTable from "../components/SummaryTable"
// import { PrismaClient } from "@prisma/client"



export default async function Home() {

  // const prisma =  new PrismaClient()

  // // Get household records from database
  // const populationData = await prisma.population_record.findMany()
  // const listingData = await prisma.listing_record.findMany()
  

  return (
    <div className="container px-10">
      <div className="flex flex-row">
        <div className="flex flex-col pt-10">
           <h1 className="text-4xl font-bold text-cyan-950"> Dashboard </h1> 
           <p className="text-sm font-light text-gray-500">Data used here are form testing purposes only and does not represent real data collection. Any reliance is at your own risk</p>
        </div>
      </div>
      <div className="nsodivider"></div> 
          <StatsCounter/>
          <SummaryTable/>
    </div>
  )
}
