
import StatsCounter from "../components/StatsCounter"
import SummaryTable from "../components/SummaryTable"
import DailyProgress from "../components/DailyProgress"


export default function Home() {
  return (
    <div>
        <div className="flex flex-row pt-10 justify-between">
            <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-cyan-950">Dashboard</h1>
            <p className="text-sm font-light text-gray-500">
                Data used here are for testing purposes only and do not represent real data collection.
                Any reliance is at your own risk.
            </p>
            </div>
        </div>
      <div className="nsodivider"></div>
      <StatsCounter />
      <DailyProgress/>
      <SummaryTable />

  </div>
  )
}
