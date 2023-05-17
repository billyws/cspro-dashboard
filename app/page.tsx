import React from "react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1>This is home</h1>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </main>
  )
}
