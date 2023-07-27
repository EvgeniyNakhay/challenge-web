import {Grid, Typography} from "@mui/material";
import Link from "next/link";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const NavBarCreate = () => {
    return (
        <Grid container sx={{
            background: "#F7F8FC",
            paddingLeft: '5%',
            paddingTop: '1.5vh',
            paddingBottom: '1.5vh',
            boxShadow: "0px 5px 10px -1px rgba(100, 106, 111, 0.20)"
        }}>
            <Grid pt={1} xs={12} container>
                <Grid xs={2}>
                    <Link href={'/'}>
                        <Typography>
                            <ArrowBackIosNewIcon sx={{
                                paddingTop: 1.5
                            }}/>
                            На главную
                        </Typography>
                    </Link>
                </Grid>
                <Grid>
                    <Typography sx={{
                        fontSize: '30px',
                    }}>
                        Создание челленджа
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default NavBarCreate