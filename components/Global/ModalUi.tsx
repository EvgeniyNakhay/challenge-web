import {Box, Grid, Icon, Modal, Typography} from "@mui/material";
import React, {useState} from "react";
import Image from "next/image";
import archive from "@/public/icons/achiv.svg";
import Button from "@mui/material/Button";


const ModalUi = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Modal open={open} sx={{
                marginTop: '25vh',
                marginLeft: '37vw',
                width: '20em',
            }}>
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
                                Поздравляем!
                            </Typography>
                        </Grid>
                        <Grid xs={8} ml={7} mt={1}>
                            <Typography sx={{
                                textAlign: "center",
                                fontSize: "1.2em"
                            }}>
                                Сегодня 3 день челленджа. Вы еще ближе к цели!
                            </Typography>
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
                            }}>Поделиться</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    )
}

export default ModalUi;