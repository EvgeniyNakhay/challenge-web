import {Grid, Typography} from "@mui/material";
import React from "react";
import TaskProgress from "@/components/MainPage/TaskProgress";


const TaskDay: React.FC<HomePage> = ({data}) => {
    const flag = data.id === 1 ? {
        border: "1px solid #242752",
        background: "#d6daff",
        borderRadius: "1em"
    } : null;

    return (
        <Grid container mt={2}>
            <Grid xs={12} ml={2}>
                <Typography sx={{color: "#7B7B9C"}}>{data.date}</Typography>
            </Grid>
            <Grid xs={12} p={2} sx={flag}>
                <Grid>
                    <Typography>
                        4 февраля
                    </Typography>
                </Grid>
                <Grid xs={12}>
                    {
                        data.tasks ?
                            data.tasks.map(element => (<TaskProgress key={data.id} text={element}/>))
                            : <TaskProgress text={data.task}/>
                    }
                </Grid>

            </Grid>
        </Grid>
    )
}

export default TaskDay;