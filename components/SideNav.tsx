import Image from "next/image"
import Link from "next/link"


export default function SideNav(){
    return (
        <div className="flex flex-col w-2/12 h-screen px-4 py-2 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
            <div className="flex flex-col justify-between flex-1 mt-2">
                <nav>
                    <Link 
                        className="flex items-center px-4 py-2 text-gray-70 rounded-md dark:bg-gray-800 dark:text-gray-200" 
                        href="/">
                        Dashboard
                    </Link>
                    <Link 
                        className="flex items-center px-4 py-2 text-gray-700 rounded-md dark:bg-gray-800 dark:text-gray-200" 
                        href="/">
                        Coverage
                    </Link>
                    <Link 
                        className="flex items-center px-4 py-2 text-gray-700 rounded-md dark:bg-gray-800 dark:text-gray-200" 
                        href="/">
                        Devices
                    </Link>
                    <Link 
                        className="flex items-center px-4 py-2 text-gray-700 rounded-md dark:bg-gray-800 dark:text-gray-200" 
                        href="/">
                        Quick stats
                    </Link>
                </nav>
                
            </div>
        </div>
        )
    }