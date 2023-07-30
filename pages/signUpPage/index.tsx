import {Grid, Typography} from "@mui/material";
import BoxAuthorizationUI from "@/UI/BoxAuthorizationUI";
import InputUI from "@/UI/InputUI";
import {BurgerIcon, CopyIcon, PlusIcon} from "@/UI/Icons/CastomIcon";
import CustomButtnoIcon from "@/UI/CustomButtnoIcon";
import React from "react";


export default function Index() {
    return (

        <>
                <BoxAuthorizationUI>
                    <>
                        <Grid>
                            <Typography sx={{
                                fontSize: '32px',
                            }}>
                                Создание челленджа
                            </Typography>
                        </Grid>
                        <InputUI
                            type={"text"}
                            placeholder={"Введите наименование"}
                            label={"Наименование челленджа"}/>
                        <InputUI
                            multiline={true}
                            type={"text"}
                            placeholder={"Описание челленджа"}
                            label={"Описание челленджа..."}/>
                        <Grid container xs={8}>
                            <InputUI
                                type={"date"}
                                placeholder={"Дата начала"}
                                label={"Выберите дату"}/>
                            <InputUI
                                type={"date"}
                                placeholder={"Дата окончания"}
                                label={"Выберите дату"}/>
                        </Grid>
                    </>
                </BoxAuthorizationUI>
                <BoxAuthorizationUI>
                    <>
                        <InputUI
                            type={"text"}
                            label={"День 1"}
                            placeholder={"Введите описание"}
                            icon={<CopyIcon/>}
                        />
                        <Grid container mt={3}>
                            <Grid xs={2}>
                                <CustomButtnoIcon
                                    icon={<PlusIcon/>}
                                    text={"Добавить день"}/>
                            </Grid>
                            <Grid xs={4}>
                                <CustomButtnoIcon
                                    icon={<BurgerIcon/>}
                                    text={"Разделить на периоды"}/>
                            </Grid>
                        </Grid>
                    </>
                </BoxAuthorizationUI>
            </>

        // <Grid container>
        //    <Box sx={{
        //             background:'white',
        //             borderRadius: '1em'
        //         }}>
        //             <Grid container pt={2}>
        //                 <Grid xs={12} ml={14}>
        //                     <Image src={archive} alt={""} width={120}/>
        //                 </Grid>
        //                 <Grid ml={10}>
        //                     <Typography sx={{
        //                         fontSize: "1.7em",
        //                         fontWeight: 500
        //                     }}>
        //                         Вход
        //                     </Typography>
        //                 </Grid>
        //                 <Grid xs={8} ml={7} mt={1}>
        //                     <TextField id="outlined-basic" label="Телефон или почта" variant="outlined" />
        //                 </Grid>
        //                 <Grid xs={12} ml={4} mt={2} pb={2}>
        //                     <Button sx={{
        //                                 height: "3vw",
        //                                 width: "15vw",
        //                                 color: 'white',
        //                                 background: '#6B73EF',
        //                                 fontSize: "1.5em",
        //                                 "&:hover": {
        //                                     background: "#666ab6"
        //                                 }
        //                             }}>
        //                                 Войти
        //                     </Button>
        //                 </Grid>
        //             </Grid>
        //         </Box>
        // </Grid>
    )
}
