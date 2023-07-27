import {Box, Grid, Typography} from "@mui/material";
import Image from "next/image";
import archive from "@/public/icons/achiv.svg";
import Button from "@mui/material/Button";
import React from "react";


const TaskDayModal = () => {
   return (<>
       <Box sx={{
           background:'white',
           borderRadius: '1em'
       }}>
           <Grid container pt={2}>
               <Grid xs={12} ml={14}>
                   <Image src={archive} alt={""} width={120}/>
               </Grid>
               <Grid ml={10}>
                   <Typography sx={{
                       fontSize: "1.7em",
                       fontWeight: 500
                   }}>
                       Поздравляем!
                   </Typography>
               </Grid>
               <Grid xs={8} ml={7} mt={1}>
                   <Typography sx={{
                       textAlign: "center",
                       fontSize: "1.2em"
                   }}>
                       Сегодня 3 день челленджа. Вы еще ближе к цели!
                   </Typography>
               </Grid>
               <Grid xs={12} ml={9} mt={2} pb={10} sx={{height: "3vw", width: "15vw"}}>
                   <Button sx={{
                       color: 'white',
                       background: '#6B73EF',
                       fontSize: "1.5em",
                       "&:hover": {
                           background: "#666ab6"
                       }
                   }}>Поделиться</Button>
               </Grid>
           </Grid>
       </Box>
   </>)
}

export default TaskDayModal;