import styles from "./../NavBar/styles/NavBar.module.css";
import React from "react";
import {TitilePage} from "@/types/Layouts";

export const TitlePage: React.FC<TitilePage> = ({title}) => {
  return (
    <h2 className={styles.title__page}>{title}</h2>
  )
}