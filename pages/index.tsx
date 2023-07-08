import {Box, Container, Grid} from "@mui/material";
import {TitlePage} from "@/components/MainPage/titlePage";
import Aside from "@/components/MainPage/aside";
import TaskDay from "@/components/MainPage/taskDay";
import Statistics from "@/components/MainPage/statistic";
import Content from "@/layouts/content";

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
