import React from "react";
import {Grid, List, ListItemText, Typography} from "@mui/material";
import {CalendarTypes} from "@/types/Layouts";


export const Calendar: React.FC<CalendarTypes> = ({data, flag}) => {
  return(
         <List sx={{
             display: "inline-list-item"
         }}>
             {
                 data.map((item) => (
                     <>
                         <ListItemText>
                            <Grid ml={1}>
                                <Typography sx={{
                                    textAlign: "center",
                                    fontSize: "3vh",
                                    fontWeight: "bold",
                                    opacity: .7,
                                    width: "1.5em",
                                    height: "5vh",
                                    paddingTop: "5%",
                                    paddingLeft: .5,
                                    paddingRight: .5,
                                    background: "#EDEEFC",
                                    borderRadius: "10%"
                                }}>
                                    {item.day}
                                </Typography>
                                {
                                    flag ?
                                        <Typography>
                                            {item.status}
                                        </Typography> : null
                                }
                            </Grid>
                         </ListItemText>
                     </>
                 ))
             }
         </List>
  );
}