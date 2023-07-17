import {Grid, Typography} from "@mui/material";
import React from "react";
import TaskProgress from "@/components/MainPage/TaskProgress";
import Image from "next/image";
import archive from "@/public/icons/achiv.svg";
import ModalUi from "@/components/Global/ModalUi";
import {HomePage} from "@/types/HomePage";
import TaskDayModal from "@/components/Global/Modals/TaskDayModal";


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
                <Grid container>
                    <Grid xs={11}>
                        <Typography>
                            4 февраля
                        </Typography>
                    </Grid>
                    {
                        data.img ? <Grid ml={2}>
                            <Image src={archive} alt={""}/>
                        </Grid> : null
                    }
                </Grid>
                <Grid xs={12}>
                    {
                        data.tasks ?
                            data.tasks.map(element => (<TaskProgress key={data.id} text={element}/>))
                            : <TaskProgress text={data.task}/>
                    }
                </Grid>
            </Grid>
            {/*Модалка*/}
            <ModalUi flag={false}>
                <TaskDayModal/>
            </ModalUi>
        </Grid>
    )
}

export default TaskDay;