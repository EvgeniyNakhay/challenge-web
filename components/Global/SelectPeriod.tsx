import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {useState} from "react";


export const SelectPeriod = () => {
    const [period, setPeriod] = useState("Неделя");

    const setPeriodSelect = (e: SelectChangeEvent) => {
        setPeriod(e.target.value)
    }

    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{period}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={period}
                    label={period}
                    onChange={setPeriodSelect}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

