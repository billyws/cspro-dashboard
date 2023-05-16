
// Create a next.js login page styled with tailwinds
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Login from '../components/Login'
import Signup from '../components/Signup'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'
import axiosWithAuth from '../utils/axiosWithAuth'
import jwt_decode from 'jwt-decode'


export default function Login(){
    return (
        <div>

            <div
            className="flex flex-col items-center justify-between p-24"
            style={{ height: '100vh' }}
            >
                <Head>
                    <title>CSPro Dashboard</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header />
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold">Welcome to CSPro</h1>
                    <h2 className="text-2xl font-bold">Please Login or Signup</h2>
                    <div className="flex flex-row items-center justify-center">
                        <Login />
                        <Signup />
                    </div>
                </div>
            </div>
        </div>

    )
}