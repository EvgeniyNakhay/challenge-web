import {Box, Container, Grid, TextField} from "@mui/material";
import styles from "./styles/NavBar.module.css";
import { styled, alpha } from '@mui/material/styles';
import Image from "next/image";

export default function Navbar({children}){

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        padding: '5px 30px',
        borderRadius: '8px',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        '&:active': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
            cursor: 'text',
          },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '258px',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: '258px',
        },
      }));

    return (
        <div className={styles.main}>
            <Container>
                <Grid container spacing={2} sx={{
                    height: 84,
                    paddingTop: '20px',
                    paddingBottom: '20px',
                    alignItems: 'center',
                }}>
                    <Grid item xs={1}>
                        <h1>Logo</h1>
                    </Grid>
                    <Grid item xs={6} sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}>
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
                    <Grid item xs={4} sx={{
                        display: 'grid',
                        justifyContent: 'flex-end',
                    }}>
                        <Search>Поиск</Search>
                    </Grid>
                    <Grid item xs={1}>
                        <div className={styles.header_avatar}>
                            <Image 
                                src="/../public/avatar/Avatar.png"
                                width={44}
                                height={44}
                                alt="avatar"
                            />
                        </div>
                    </Grid>
                </Grid>
            </Container>
            {children}
        </div>
    )
}