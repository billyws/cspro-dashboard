import Image from "next/image"

export default function TopNav(){
    return (
        <div>
            <nav>
            <div className="navbar bg-sky-900 text-sky-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">CSPro dashboard</a>
                </div>
                <div className="flex-none">
                    
                    <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <Image src="/images/bsomers_picofme02.png" alt="avatar" width={50} height={50} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    )
}