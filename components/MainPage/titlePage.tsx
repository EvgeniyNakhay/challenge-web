import styles from "./../NavBar/styles/NavBar.module.css";
import {TitilePage} from "@/types/TitlePageTypes";
import React from "react";

export const TitlePage: React.FC<TitilePage> = ({title}) => {
  return (
    <h2 className={styles.title__page}>{title}</h2>
  )
}