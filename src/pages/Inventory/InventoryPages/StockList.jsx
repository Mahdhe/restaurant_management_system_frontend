import { StockListStats } from "../../../data/StockListStats";
import StatsGrid from "../components/StatsGrid";

export default function StockList() {
    return(
        <div>
            <StatsGrid stats={StockListStats}/>
        </div>
    )
}