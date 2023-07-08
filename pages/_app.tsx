import '@/taiwin/globals.css'
import type { AppProps } from 'next/app';
import {Box, Container, Grid} from "@mui/material";
import {Navbar} from "@/components/NavBar/navbar";
import '../styles/globals.css';
import Content from "@/layouts/content";
import {TitlePage} from "@/components/MainPage/titlePage";
import Aside from "@/components/MainPage/aside";
import TaskDay from "@/components/MainPage/taskDay";
import Statistics from "@/components/MainPage/statistic";

// Команда для сборки стелей тайвин
//npx tailwindcss -i ./styles/globals.css -o ./taiwin/globals.css --watch


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container sx={{
        height: '90vh',
        bgcolor: 'rgba(255, 255, 255, .25)', 
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, .4)',
        }}>
        <Navbar>
            <Grid container>
                <Grid mt={5} xs={2}>
                    <Grid>
                        <TitlePage title={"Пить воду"}/>
                    </Grid>
                    <Grid>
                        <Aside/>
                    </Grid>
                </Grid>
                <Grid xs={10}>
                    <Component {...pageProps} />
                </Grid>
            </Grid>
        </Navbar>
    </Container>
  )
}
