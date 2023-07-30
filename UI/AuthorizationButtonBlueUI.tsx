import Button from "@mui/material/Button";
import Link from "next/link";
import React from "react";
import { AuthorizationButtonBlue } from "@/UI/typesUI/UI";
import { Typography } from "@mui/material";

const AuthorizationButtonBlueUI: React.FC<AuthorizationButtonBlue> = ({
  text,
  url = "",
}) => {
  return (
    <Button
      sx={{
        width: "100%",
        color: "white",
        background: "#6B73EF",
        padding: "10px 16px",
        "&:hover": {
          fontsize: 17,
          background: "#6B73EF",
          opacity: 0.8,
        },
      }}
    >
      {url !== "" ? (
        <Link href={url}>{text}</Link>
      ) : (
        <Typography sx={{ color: "white" }}>{text}</Typography>
      )}
    </Button>
  );
};

export default AuthorizationButtonBlueUI;
