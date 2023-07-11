import {Grid} from "@mui/material";
import TaskDay from "@/components/MainPage/taskDay";
import Statistics from "@/components/MainPage/statistic";

export default function Home() {
    return (
        <Grid container>
            <Grid xs={8}>
                <TaskDay/>
            </Grid>
            <Grid xs={3}>
                <Statistics/>
            </Grid>
        </Grid>
    )
}
