import {Grid,Box,TextField,Button} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from "next/image";
import archive from "@/public/icons/achiv.svg";
import Typography from '@mui/material/Typography';
import Statistics from "@/components/MainPage/statistic";
import TaskComponent from "@/components/MainPage/TaskComponent";
import {TitlePage} from "@/components/MainPage/titlePage";

export default function Index() {
    return (
        <Grid container>
           <Box sx={{
                    background:'white',
                    borderRadius: '1em'
                }}>
                    <Grid container pt={2}>
                        <Grid xs={12} ml={14}>
                            <Image src={archive} alt={""} width={120}/>
                        </Grid>
                        <Grid ml={10}>
                            <Typography sx={{
                                fontSize: "1.7em",
                                fontWeight: 500
                            }}>
                                Вход
                            </Typography>
                        </Grid>
                        <Grid xs={8} ml={7} mt={1}>
                            <TextField id="outlined-basic" label="Телефон или почта" variant="outlined" />
                        </Grid>
                        <Grid xs={12} ml={4} mt={2} pb={2}>
                            <Button sx={{
                                        height: "3vw",
                                        width: "15vw",
                                        color: 'white',
                                        background: '#6B73EF',
                                        fontSize: "1.5em",
                                        "&:hover": {
                                            background: "#666ab6"
                                        }
                                    }}>
                                        Войти
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
        </Grid>
    )
}
