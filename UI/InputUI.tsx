import {Grid, TextField, Typography} from "@mui/material";
import React from "react";
import {InputUI} from "@/UI/typesUI/UI";


const InputUI: React.FC<InputUI> = ({label, placeholder, type, multiline}) => {
    const inputSize = type === ("date" || "datetime-local") ? 5 : 7

    return <Grid container xs={inputSize} ml={4} mb={2}>
        <Grid xs={12} mb={1} ml={.4}>
            <Typography sx={{
                color: "#9E9EBC"
            }}>
                {label}
            </Typography>
        </Grid>
        <Grid xs={12}>
            <TextField multiline={multiline}  type={type} placeholder={placeholder} sx={{
                backgroundColor: '#F7F8FC',
                width: "100%"
            }}/>
        </Grid>
    </Grid>
}

export default InputUI