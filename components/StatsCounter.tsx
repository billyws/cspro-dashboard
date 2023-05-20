export default function StatsCounter(){
    return (
        <div className="nsostats nsostats-vertical mb-10 lg:nsostats-horizontal shadow">
  
            <div className="nsostat">
                <div className="nsostat-title">Population count</div>
                <div className="nsostat-value">31,256</div>
                <div className="nsostat-desc">March 20th</div>
            </div>
            
            <div className="nsostat">
                <div className="nsostat-title">Interviews by day</div>
                <div className="nsostat-value">4,200</div>
                <div className="nsostat-desc">↗︎ 400 (22%)</div>
            </div>
            
            <div className="nsostat">
                <div className="nsostat-title">CUs covered</div>
                <div className="nsostat-value">1,200</div>
                <div className="nsostat-desc">↘︎ 90 (14%)</div>
            </div>
  
</div>
    )
}