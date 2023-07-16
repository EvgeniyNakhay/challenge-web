import React, {useState} from "react";
import {Checkbox, Grid, Typography} from "@mui/material";


const TaskProgress: React.FC<TaskProgress> = ({text}) => {
    const [checked, setChecked] = useState(false);
    const decor = checked ? {textDecoration: "line-through"} : null;
    const handleChenge = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }

    return (
        <Grid container>
            <Grid>
                <Checkbox
                    checked={checked}
                    onChange={handleChenge}
                    sx={{
                    borderRadius: "90%"
                }}/>
            </Grid>
            <Grid>
                <Typography pt={1} sx={decor}>
                    {text}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default TaskProgress