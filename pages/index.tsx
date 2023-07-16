import {Grid} from "@mui/material";
import Statistics from "@/components/MainPage/statistic";
import TaskComponent from "@/components/MainPage/TaskComponent";
import {TitlePage} from "@/components/MainPage/titlePage";

export default function Home() {
    return (
        <Grid container>
            <Grid xs={8}>
                <TitlePage title={"Пить воду"} flag={true}/>
                <TaskComponent/>
            </Grid>
            <Grid xs={3.5}>
                <Statistics/>
            </Grid>
        </Grid>
    )
}
