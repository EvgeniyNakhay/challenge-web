import {Grid} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Statistics from "@/components/MainPage/statistic";
import TaskComponent from "@/components/MainPage/TaskComponent";
import {TitlePage} from "@/components/MainPage/titlePage";

export default function Index() {
    return (
        <Grid container>
            <Grid xs={8}>
                <TitlePage title={"Пить воду"} flag={true}/>
                <TaskComponent/>
            </Grid>
            <Grid xs={3.5}>
                <Statistics/>
            </Grid>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
