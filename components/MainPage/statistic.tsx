import {Grid, Typography} from "@mui/material"
import styles from "./../NavBar/styles/NavBar.module.css";
import {Calendar} from "./calendar";
import {SelectPeriod} from "@/components/Global/SelectPeriod";

import {useState} from "react";

const status = {
    ok: 1,
    filed: 2,
    processe: 3,
    none: undefined,
}

const Statistics = () => {

    const [day, setDay] = useState([
        {id: 1, day: 7, status: status.ok},
        {id: 2, day: 8, status: status.filed},
        {id: 3, day: 9, status: status.processe},
        {id: 4, day: 10, status: status.none},
        {id: 5, day: 10, status: status.none},
        {id: 6, day: 10, status: status.none},
        {id: 7, day: 10, status: status.none},
    ])

    return (
        <Grid className={styles.statistic_wrapper} container sx={{
            backgroundColor: "red"
        }}>
            <Grid xs={12}>
                <Grid xs={1}>
                    <Typography>
                        Статистика
                    </Typography>
                </Grid>
                {/* вынести период в отдельный компонент */}
                <Grid xs={5} >
                    <SelectPeriod/>
                </Grid>
            </Grid>
            <Grid>
                <Calendar data={day}/>
            </Grid>
        </Grid>
    );
}

export default Statistics