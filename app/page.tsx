import React from "react"
import Image from "next/image"
import StatsCounter from "../components/StatsCounter"
import SummaryTable from "../components/SummaryTable"
// import { PrismaClient } from "@prisma/client"



export default async function Home() {

  // const prisma =  new PrismaClient()

  // // Get household records from database
  // const populationData = await prisma.population_record.findMany()
  // const listingData = await prisma.listing_record.findMany()
  

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

            <div className="flex avatar online">
                <div className="rounded-full">
                    <Image src="/images/bsomers_picofme02.png" alt="avatar" width={50} height={50} />
                </div>
            </div>
        </div>

      <div className="nsodivider"></div>

      <StatsCounter />
      <SummaryTable />
  </div>

  )
}
