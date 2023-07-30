import { Box } from "@mui/material";
import { Layouts } from "@/types/Layouts";

const BoxAuthorizationUI: React.FC<Layouts> = ({ children }) => {
  return (
    <Box
      sx={{
        maxWidth: "632px",
        padding: "32px",
        background: "white",
        borderRadius: "1em",
      }}
    >
      {children}
    </Box>
  );
};

export default BoxAuthorizationUI;
