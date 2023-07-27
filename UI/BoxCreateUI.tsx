import {Box} from "@mui/material";
import {Layouts} from "@/types/Layouts";



const BoxCreateUI: React.FC<Layouts> = ({children}) => {
  return <Box m={3} sx={{
    paddingTop: "1.2em",
    paddingBottom: "1.2em",
    background: 'white',
    borderRadius: "1em",
  }}>
    {children}
  </Box>
}

export default BoxCreateUI