import {Grid, TextField, Typography} from "@mui/material";
import React from "react";
import {InputUI} from "@/UI/typesUI/UI";


const InputUI: React.FC<InputUI> = ({label, placeholder, type, multiline=false, icon = undefined}) => {
    const inputSize = type === ("date" || "datetime-local") ? 5 : 7
    const sizeElem = icon ? 11 : 12;

    return <Grid container xs={inputSize} ml={4} mb={2}>
        <Grid xs={12} mb={1} ml={.4}>
            <Typography sx={{
                color: "#9E9EBC"
            }}>
                {label}
            </Typography>
        </Grid>
        <Grid xs={sizeElem}>
            <TextField multiline={multiline}  type={type} placeholder={placeholder} sx={{
                backgroundColor: '#F7F8FC',
                width: "100%"
            }}/>
        </Grid>
        {
            icon ? (<Grid m={1.8}>
                {icon}
            </Grid>) : null
        }
    </Grid>
}

export default InputUI