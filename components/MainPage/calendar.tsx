import { Box, Typography } from "@mui/material"
import styles from "./../NavBar/styles/NavBar.module.css";

const dayWeek = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];


export default function Calendar() {
  return(
    <div className={styles.calendar}>
      <Box sx={{
        display: "flex",
        width: '100%',
        margin: '0 auto',
        justifyContent: 'space-between',
      }}>
        {dayWeek.map((week) => (
          <Box sx={{
            display: "flex",
          }}>
            <Box sx={{
              width: '40px',
              textAlign: 'center',
            }}>
              <Typography sx={{
                fontSize: '14px',
              }}>
                {week}
              </Typography>
              <Typography>
                {/* добавить функцию с текущей неделей
                  написать с учетом высокостного года
                */}
                {new Date().getDate()}
              </Typography>
              <Typography>
                "°•"
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
}