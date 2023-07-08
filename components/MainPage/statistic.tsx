import {Box, Grid, Typography} from "@mui/material"
import styles from "./../NavBar/styles/NavBar.module.css";
import Calendar from "./calendar";

export default function Statistics() {
  return (
    <Grid className={styles.statistic_wrapper} container sx={{
        backgroundColor: "red"
    }}>
        <Grid xs={10}>
            <Typography>
                Статистика
            </Typography>
            {/* вынести период в отдельный компонент */}
            <select className={styles.statistic_week}>Неделя</select>
        </Grid>

        <Box sx={{
            backgroundColor: "rgba(255, 255, 255, .15)",
            borderRadius: "0 0 16px 16px",
        }}>
            <Calendar/>
        </Box>
    </Grid>
  );
}  