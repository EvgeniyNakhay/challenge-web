import {Grid} from "@mui/material";
import TaskDay from "@/components/MainPage/taskDay";
import Statistics from "@/components/MainPage/statistic";

export default function Home() {
    return (
        <>
            <div className="w-1/5">
                <TaskDay/>
            </div>
            <div className="w-1/2">
                <Statistics/>
            </div>
        </>
    )
}
