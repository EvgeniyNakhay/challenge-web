import Button from "@mui/material/Button";
import Link from "next/link";
import React from "react";
import {ButtonBlue} from "@/UI/typesUI/UI";
import {Typography} from "@mui/material";


const ButtonBlueUI: React.FC<ButtonBlue> = ({text, url}) => {
    return <Button sx={{
        color: "white",
        background: "#6B73EF",
        marginTop: "-5%",
        width: "5vw",
        height: "4vh",
        "&:hover": {
            fontsize: 17,
            background: "#6B73EF",
            opacity: 0.8
        }
    }}>
        {
            url ?
                (<Link href={url}>
                    {text}
                </Link>) :  <Typography sx={{color: "white"}}>
                    {text}
                </Typography>
        }
    </Button>
}

export default ButtonBlueUI