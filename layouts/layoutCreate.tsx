import NavBarCreate from "@/components/CreatePage/navBarCreate";
import LeftMenuCreate from "@/components/CreatePage/leftMenuCreate";
import {Grid} from "@mui/material";
import React from "react";
import {Layouts} from "@/types/Layouts";
import Footer from "@/UI/Footer";
import ButtonBlueUI from "@/UI/ButtonBlueUI";


const LayoutCreate: React.FC<Layouts> = ({children}) => {
    return (
        <>
            <NavBarCreate/>
            <Grid container>
                <Grid xs={2}>
                    <LeftMenuCreate/>
                </Grid>
                <Grid xs={9}>
                    {children}
                </Grid>
            </Grid>
            <Footer>
                <Grid container mt={3}>
                    <Grid xs={11}></Grid>
                    <Grid xs={1} pb={2}>
                        <ButtonBlueUI text={"Далее"} url={""}/>
                    </Grid>
                </Grid>
            </Footer>
        </>
    )
}

export default LayoutCreate