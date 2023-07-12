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
        <div className="w-1/12">
            <Typography ml={1.5} sx={{
                fontSize: "1.1em",
                fontWeight: "bold"
            }}>
                Статистика
            </Typography>
            {/* вынести период в отдельный компонент */}
            <div>
                <Calendar data={day} flag={false}/>
            </div>
        </div>
    );
}

export default Statistics