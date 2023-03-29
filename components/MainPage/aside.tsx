import { Box, Typography } from "@mui/material"
import styles from "./../NavBar/styles/NavBar.module.css";

export default function Aside(){
  return(
    <div className={styles.aside_wrapper}>
      <Box sx={{
        marginBottom: "20px",
        borderBottom: "1px solid rgba(255, 255, 255, .25)"
      }}>
        <ul>
          <li className={styles.item_aside + ' ' + styles.active}><a href="#">Задачи</a></li>
          <li className={styles.item_aside}><a href="#">Настройки</a></li>
        </ul>
      </Box>
      
      <Box>
        <Typography sx={{
          fontSize: "10px",
          textTransform: "uppercase",
          lineHeight: "12px",
          letterSpacing: "0.5px"
        }}>обсуждения</Typography>
        <ul>
          <li className={styles.item_aside}><a href="#">Личные сообщения</a></li>
          <li className={styles.item_aside}><a href="#">Чат с командой</a></li>
        </ul>
      </Box>
    </div>
  )
}