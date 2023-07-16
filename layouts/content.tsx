import {Container, Grid} from "@mui/material";
import React from "react";
import {Layouts} from "@/types/Layouts";
import {TitlePage} from "@/components/MainPage/titlePage";
import Aside from "@/components/MainPage/aside";
import {Navbar} from "@/components/NavBar/navbar";


const Content: React.FC<Layouts> = ({children}) => {
    return (
        <>
            <Navbar>
                <>
                    <div className="">
                        <TitlePage title={"Пить воду"}/>
                        <Aside/>
                    </div>
                    <div className="w-5/6">
                        {children}
                    </div>
                </>
            </Navbar>
        </>
    )
}

export default Content;
