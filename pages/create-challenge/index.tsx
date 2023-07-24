import LayoutCreate from "@/layouts/layoutCreate";
import {Grid, Typography} from "@mui/material";
import BoxInfo from "@/components/CreatePage/boxInfo";

export default function Index(){
    return (
        <LayoutCreate>
            <BoxInfo>
                <Grid container>
                    <Typography>dass</Typography>
                </Grid>
            </BoxInfo>
        </LayoutCreate>
    )
}