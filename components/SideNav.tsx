import Image from "next/image"
import Link from "next/link"


export default function SideNav(){
    return (
        <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
            <div className="flex flex-col items-center mt-6 -mx-2">
                <Image 
                    className="object-cover w-24 h-24 mx-2 rounded-full" 
                    src="/images/bsomers_picofme02.png" 
                    width={30}
                    height={30}
                    alt="avatar" />
                <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">Billy Somers</h4>
                <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">Administrator</p>
            </div>
            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav>
                    <Link 
                        className="flex items-center px-4 py-2 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-200" 
                        href="/">
                        Dashboard
                    </Link>
                    <Link 
                        className="flex items-center px-4 py-2 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-200" 
                        href="/">
                        Coverage
                    </Link>
                    <Link 
                        className="flex items-center px-4 py-2 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-200" 
                        href="/">
                        Devices
                    </Link>
                    <Link 
                        className="flex items-center px-4 py-2 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-200" 
                        href="/">
                        Quick stats
                    </Link>
                </nav>
                
            </div>
        </div>
        )
    }