import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { AuthorizationInputUI } from "@/UI/typesUI/UI";

const AuthorizationInputUI: React.FC<AuthorizationInputUI> = ({
  label,
  placeholder,
  type,
  multiline = false,
  icon = undefined,
}) => {
  const inputSize = type === ("date" || "datetime-local") ? 5 : 7;
  const sizeElem = icon ? 11 : 12;

  return (
    <Grid container mb={2}>
      <Grid xs={12} mb={1} ml={0.4}>
        <Typography
          sx={{
            color: "#9E9EBC",
          }}
        >
          {label}
        </Typography>
      </Grid>
      <Grid xs={sizeElem}>
        <TextField
          multiline={multiline}
          type={type}
          placeholder={placeholder}
          sx={{
            backgroundColor: "#F7F8FC",
            width: "100%",
          }}
        />
      </Grid>
      {icon ? <Grid m={1.8}>{icon}</Grid> : null}
    </Grid>
  );
};

export default AuthorizationInputUI;
