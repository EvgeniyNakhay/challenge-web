import NavBarCreate from "@/components/CreatePage/navBarCreate";
import LeftMenuCreate from "@/components/CreatePage/leftMenuCreate";
import {Box, Grid} from "@mui/material";
import React from "react";
import {LayoutCreate} from "@/types/Layouts";


const LayoutCreate: React.FC<LayoutCreate> = ({children}) => {
    return (
        <>
            <NavBarCreate/>
            <Grid container>
                <Grid xs={2}>
                    <LeftMenuCreate/>
                </Grid>
                <Grid xs={9} m={3}>
                    {children}
                </Grid>
            </Grid>
        </>
    )
}

export default LayoutCreate