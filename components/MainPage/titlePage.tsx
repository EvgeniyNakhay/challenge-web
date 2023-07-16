import styles from "./../NavBar/styles/NavBar.module.css";
import React from "react";
import {TitilePage} from "@/types/Layouts";
import {Typography} from "@mui/material";

export const TitlePage: React.FC<TitilePage> = ({title, flag}) => {
  return (
    <Typography className={flag ? styles.title__page : undefined}>{title}</Typography>
  )
}