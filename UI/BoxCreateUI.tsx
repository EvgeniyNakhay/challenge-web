import {Box} from "@mui/material";
import {Layouts} from "@/types/Layouts";


const BoxCreateUI: React.FC<Layouts> = ({children}) => {
  return <Box sx={{
    padding: "1em",
    background: 'white'
  }}>
    {children}
  </Box>
}

export default BoxCreateUI