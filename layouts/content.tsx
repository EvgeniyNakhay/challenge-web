import {Grid, Container, Paper, TextField, Button, Typography} from "@mui/material";
import React from "react";
import {Layouts} from "@/types/Layouts";
import Aside from "@/components/MainPage/aside";
import {Navbar} from "@/components/NavBar/navbar";


const Content: React.FC<Layouts> = ({children}) => {
    return (
        <>
            <Navbar/>
            {/* <Grid container ml={10}>
                <Grid mr={2} xs={1}>
                    <Aside/>
                </Grid>
                <Grid xs={10}>
                    {children}
                </Grid>
            </Grid> */}

            <Container maxWidth="sm">
                <Grid 
                    container 
                    spacing={2}
                    direction="column"
                    justifyContent="center"
                    style={{ minHeight: '100vh' }}
                >
                    <Paper 
                        variant="outlined" 
                        sx={{ padding: '32px'}}
                    >
                        <Grid container direction="column" alignItems="center" rowSpacing="32px">
                            <Typography variant="h3" display="block">
                                Регистрация
                            </Typography>
                            <Grid container direction="column" rowSpacing="24px">
                                <Grid container spacing={2} justifyContent="space-between">
                                    <Grid item>
                                        <TextField 
                                            fullWidth
                                            id="outlined-basic"
                                            label="Имя"
                                            placeholder="Введите имя"
                                            variant="outlined"
                                        />        
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            fullWidth 
                                            id="outlined-basic"
                                            label="Фамилия"
                                            placeholder="Введите фамилию"
                                            variant="outlined"
                                        />        
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <TextField 
                                        type="emal"
                                        fullWidth
                                        id="outlined-basic"
                                        label="E-mail"
                                        placeholder="Введите почту"
                                        variant="outlined"
                                    />        
                                </Grid>
                                <Grid item>
                                    <TextField 
                                        type="password"
                                        fullWidth
                                        id="outlined-basic"
                                        label="Пароль"
                                        placeholder="Придумайте пароль"
                                        variant="outlined"
                                    />        
                                </Grid>
                                <Grid item>
                                    <TextField 
                                        type="password"
                                        fullWidth
                                        id="outlined-basic"
                                        label="Подтверждение пароля"
                                        placeholder="Подтвердите пароль"
                                        variant="outlined"
                                    />        
                                </Grid>
                            </Grid>
                            <Grid item style={{ maxWidth: '318px' }}>
                                <Button fullWidth type="submit" variant="contained">Зарегистрироваться</Button>
                            </Grid>
                            <Typography 
                                align="center" 
                                variant="caption"
                                display="block"
                                style={{ fontSize: '12px', maxWidth: '318px', marginTop: '16px'}}
                            >
                                Нажимая кнопку «Зарегистрироваться», вы соглашаетесь с Правилами сайта и даете согласие на обработку персональных данных
                            </Typography>
                        </Grid>
                    </Paper>
                </Grid>
            </Container>

        </>
    )
}

export default Content;
