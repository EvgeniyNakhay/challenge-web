import React from "react";
import {CalendarTypes} from "@/types/CalendarTypes";
import {Grid, List, ListItem, Typography} from "@mui/material";


export const Calendar: React.FC<CalendarTypes> = ({data}) => {
  return(
         <List sx={{
             width: "20%",
             display: "inline-list-item"
         }}>
             {
                 data.map((item) => (
                     <>
                         <ListItem sx={{
                             margin: "5%",
                             padding: 0
                         }}>
                            <Grid>
                                <Typography>
                                    {item.day}
                                </Typography>
                                <Typography>
                                    {item.status}
                                </Typography>
                            </Grid>
                         </ListItem>
                     </>
                 ))
             }
         </List>
  );
}