export default function StatsCounter(){
    return (
        <div>
            <div className="grid grid-cols-4 gap-4 mb-5">
                <div className="p-5 bg-slate-50 rounded">
                    <h1 className="text-3xl font-bold text-gray-950">25,332</h1>
                    <h4 className="text-normal text-gray-600">Household coverage</h4>
                    <span className="text-sm text-gray-400">Up by 5%</span>
                </div>
                <div className="p-5 bg-slate-50 rounded">
                    <h1 className="text-3xl font-bold text-gray-950">5,322</h1>
                    <h4 className="text-normal text-gray-600">Census Units</h4>
                    <span className="text-sm text-gray-400">Up by 30%</span>
                </div>
                <div className="p-5 bg-slate-50 rounded">
                    <h1 className="text-3xl font-bold text-gray-950">192</h1>
                    <h4 className="text-normal text-gray-600">Reject Interviews</h4>
                    <span className="text-sm text-gray-400">Down by 90%</span>
                </div>
                <div className="p-5 bg-slate-50 rounded">
                    <h1 className="text-3xl font-bold text-gray-950">834</h1>
                    <h4 className="text-normal text-gray-600">Average interviews</h4>
                    <span className="text-sm text-gray-400">Down by 4%</span>
                </div>
            </div>
        </div>
    )
}