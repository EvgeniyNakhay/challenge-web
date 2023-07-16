import {SelectChangeEvent} from "@mui/material";
import {useState} from "react";


export const SelectPeriod = () => {
    const [period, setPeriod] = useState("Неделя");

    const setPeriodSelect = (e: SelectChangeEvent) => {
        setPeriod(e.target.value)
    }

    return (
        <>
           <select>
               <option>{period}</option>
           </select>
        </>
    )
}

