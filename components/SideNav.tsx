import Image from "next/image"
import Link from "next/link"


export default function SideNav(){
    return (
        <div className="nsomenu bg-base-100 w-2/12 h-screen">
            <div className="m-10">
                <h1 className="text-xl font-bold">
                    CSPro Dashboard
                </h1>
            </div>
            <ul >
                <li>
                    <Link href={"/"} className="nsoactive"> Dashboard
                    </Link>
                </li>
                <li>
                    <Link href={"/"} >Quick stats</Link>
                </li>
                <li>
                    <Link href={"/"}> Interviewers
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>Reports</Link>
                </li>
            
            </ul>
        </div>
        )
    }