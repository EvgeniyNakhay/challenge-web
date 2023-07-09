import {Grid} from "@mui/material";
import TaskDay from "@/components/MainPage/taskDay";
import Statistics from "@/components/MainPage/statistic";

export default function Home() {
    return (
        <Grid container>
            <Grid xs={6}>
                <TaskDay/>
            </Grid>
            <Grid xs={5}>
                <Statistics/>
            </Grid>
        </Grid>
    )
}
