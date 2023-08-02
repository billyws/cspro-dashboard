
import StatsCounter from "../components/StatsCounter"
import DailyProgress from "../components/DailyProgress"
import SummaryMap from "../components/SummaryMap"


export default function Home() {
  return (
    <div>
        <div className="flex flex-row pt-10">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col col-span-2">
                  <h1 className="text-4xl font-bold text-cyan-950">Census Pilot Dashboard - DevMode</h1>
                  <p className="text-sm font-light text-gray-500">
                    Data used here are for testing purposes only and do not represent real data collection.
                    Any reliance is at your own risk.
                </p>
              </div>
              <div className="flex flex-col col-span-1 justify-end">
                  
              </div>
            </div>
        </div>
      <div className="nsodivider"></div>
      <StatsCounter />
      <SummaryMap />
      <DailyProgress/>

  </div>
  )
}
