import React from "react"
import Link from "next/link"
import { PrismaClient } from "@prisma/client"

export default async function Home() {

  const prisma =  new PrismaClient()

  // Get household records from database
  const populationData = await prisma.population_record.findMany()
  

  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-10">
      <div className="flex flex-col container">
        <div className="flex flex-col bg-white shadow-md rounded-md p-4">
          <h2 className="text-2xl font-bold">Population</h2>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="text-gray-500">Total Count</p>
              <p className="text-2xl font-bold">{populationData.length}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
