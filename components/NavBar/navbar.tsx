import {Box, Container, Grid, TextField} from "@mui/material";
import styles from "./styles/NavBar.module.css";
import { styled, alpha } from '@mui/material/styles';

export default function Navbar({children}){

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        padding: '5px 30px',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }));

    return (
        <div className={styles.main}>
            <Container sx={{ 
                height: '90vh',
                bgcolor: 'rgba(255, 255, 255, .25)', 
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, .4)',
                }}>
                <Grid container spacing={2} sx={{
                    height: 84,
                    paddingTop: '20px',
                    paddingBottom: '20px',
                }}>
                    <Grid item xs={1}>
                        <h1>Logo</h1>
                    </Grid>
                    <Grid item xs={6}>
                        <Box>
                            <nav>
                                <ul>
                                    <li><a href="#">Челленджи</a></li>
                                    <li><a href="#">Мир</a></li>
                                    <li><a href="#">Сообщества</a></li>
                                    <li><a href="#">Создать</a></li>
                                </ul>
                            </nav>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Search>Поиск</Search>
                    </Grid>
                    <Grid item xs={1}>
                        Аватар
                    </Grid>
                </Grid>
            </Container>
            {/* <nav className={'container mx-auto border-solid-white'}>
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
            </nav> */}
            {children}
        </div>
    )
}