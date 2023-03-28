import {Container, Grid, TextField} from "@mui/material";
import styles from "./styles/NavBar.module.css";

export default function Navbar({children}){
    return (
        <div className={styles.main}>
            <nav className={'container mx-auto border-solid-white'}>
                <Grid container>
                    <Grid xs={2} ml={10}>
                        <h1>Logo</h1>
                    </Grid>
                    <Grid xs={7}>
                        <div className={"flex-1"}>
                            <span>
                                Челленджи
                            </span>
                            <span>
                                Мир
                            </span>
                            <span>
                                Сообщества
                            </span>
                            <span>
                                Создать
                            </span>
                        </div>
                    </Grid>
                    <Grid xs={2}>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        <span>Avatar</span>
                    </Grid>
                </Grid>
            </nav>
            {children}
        </div>
    )
}