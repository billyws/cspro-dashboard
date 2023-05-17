

import React from "react"
import Head from "next/head"

export default function Login(){
    return (
        <div>
            <div
            className="flex flex-col items-center justify-between p-24"
            >
                <Head>
                    <title>CSPro Dashboard</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold">Welcome to CSPro</h1>
                    <h2 className="text-2xl font-bold">Please Login or Signup</h2>
                    <div className="flex flex-row items-center justify-center">
                       
                    </div>
                </div>
            </div>
        </div>

    )
}