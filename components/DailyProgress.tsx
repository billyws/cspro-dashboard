export default function DailyProgress(){
    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                <div className="p-5 my-5 rounded shadow-sm bg-slate-50">
                    <div className="flex flex-col-2 justify-between">
                        <h4 className="text-sm font-light text-gray-950">5,234</h4>
                        <h4 className="text-xs font-light text-green-700">Performance</h4>
                    </div>
                    <div>
                        Insert graph here
                    </div>
                </div>
                <div className="p-5 my-5 rounded shadow-sm bg-slate-50">
                    <div className="flex flex-col-2 justify-between">
                        <h4 className="text-sm font-light text-gray-950">5,234</h4>
                        <h4 className="text-xs font-light text-green-700">Synchronizations</h4>
                    </div>
                    <div>
                        Insert graph here
                    </div>
                </div>
                <div className="p-5 my-5 rounded shadow-sm bg-slate-50">
                    <div className="flex flex-col-2 justify-between">
                        <h4 className="text-sm font-light text-gray-950">5,234</h4>
                        <h4 className="text-xs font-light text-red-700">Missing values</h4>
                    </div>
                    <div>
                         <span className="text-blue-300">Insert graph here</span>
                    </div>
                </div>
            </div>
        </div>
    )
}