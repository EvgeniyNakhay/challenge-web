import {Grid} from "@mui/material";
import React from "react";
import {Layouts} from "@/types/Layouts";
import Aside from "@/components/MainPage/aside";
import {Navbar} from "@/components/NavBar/navbar";


const Content: React.FC<Layouts> = ({children}) => {
    return (
        <>
            <Navbar/>
            <Grid container ml={10}>
                <Grid mr={2} xs={1}>
                    <Aside/>
                </Grid>
                <Grid xs={10}>
                    {children}
                </Grid>
            </Grid>
        </>
    )
}

export default Content;
