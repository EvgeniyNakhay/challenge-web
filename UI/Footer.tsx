import {Box} from "@mui/material";
import {Layouts} from "@/types/Layouts";


const Footer: React.FC<Layouts> = ({children}) => {
    return <>
        <Box sx={{
            width: "100%",
            position: "absolute",
            bottom: 0,
            background: "#F7F8FC",
            boxShadow: "0px 5px 10px -1px rgba(100, 106, 111, 0.20)",
        }}>
            {children}
        </Box>
    </>
}

export default Footer