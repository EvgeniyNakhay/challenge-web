import {Box} from "@mui/material";
import React from "react";
import LayoutCreate from "@/layouts/layoutCreate";


const BoxInfo: React.FC<LayoutCreate> = ({children}) => {
    return (
        <Box sx={{
            background: "#F7F8FC",
        }}>
            {children}
        </Box>
    )
}

export default BoxInfo