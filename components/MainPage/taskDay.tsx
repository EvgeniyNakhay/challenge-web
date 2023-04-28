import { Box, Typography } from "@mui/material"
import styles from "./../NavBar/styles/NavBar.module.css";
import DayChallenge from "./dayChallenge";

export default function TaskDay() {
  return (
    <div className={styles.task_wrapper}>
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 16px",
        backgroundColor: "rgba(255, 255, 255, .15)",
        borderRadius: "16px 16px 0 0",
        borderBottom: "1px solid rgba(255, 255, 255, .4)",
      }}>
        <div>Задачи</div>
        <div className={styles.task_week}>Неделя</div>
      </Box>
      <Box sx={{
        padding: "20px 16px",
        backgroundColor: "rgba(255, 255, 255, .15)",
        borderRadius: "0 0 16px 16px",
      }}>
        <DayChallenge />
      </Box>
    </div>
  );
}  