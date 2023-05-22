import Image from "next/image"

export default function TopNav(){
    return (
        <div className="flex flex-col-2 bg-white w-full h-18  justify-between border-b-2 border-gray-400">
            <div className="flex flex-row pt-5 pl-10">
                <h3 className="text-base font-bold text-blue-950">2024 Census Monitoring <span className="text-sm font-normal"> | Papua New Guinea</span></h3>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-row">
                    <div className="flex avatar online py-3 pr-10">
                        <div className="rounded-full">
                            <Image src="/images/bsomers_picofme02.png" alt="avatar" width={40} height={40} />
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}