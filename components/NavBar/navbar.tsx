import {Grid, List, ListItemText, Typography} from "@mui/material";
import Image from "next/image";
import React, {useState} from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import ModalSignIn from "../Global/ModalSignIn";

const list = [
    {id: 1, text: 'Челленджи', url: '#'},
    {id: 2, text: 'Мир', url: '#'},
    {id: 3, text: 'Сообщества', url: '#'},
    {id: 4, text: 'Создать', url: '#', style: {
            marginTop: -.7,
            color: "white",
            background: "#6B73EF",
            "&:hover": {fontsize: 17, background: "#6B73EF", opacity: 0.8}}
    },
]
export const Navbar: React.FC = () => {
    const [openModalSignIn, setOpenModalSignIn] = React.useState(false);
    const handleOpenModalSignIn = () => setOpenModalSignIn(!openModalSignIn)
    return (
        <>
                <Grid container sx={{
                    background: "#F7F8FC",
                    paddingLeft: '20vh',
                    paddingTop: '1.5vh',
                    marginBottom: '5vh',
                    boxShadow: "0px 5px 10px -1px rgba(100, 106, 111, 0.20)"
                }}>
                    <Grid xs={2}>
                        <h1>Logo</h1>
                    </Grid>
                    <Grid xs={8}>
                        <List sx={{
                            display: "inline-list-item"
                        }}>
                            {
                                list.map((item) => (
                                    <>
                                        <ListItemText sx={{marginLeft: '4em'}}>
                                            {
                                                item.style ?
                                                    <Button sx={item.style}>
                                                        <Link href={item.url}>
                                                            {item.text}
                                                        </Link>
                                                    </Button>
                                                    :
                                                    <Link href={item.url}>{item.text}</Link>
                                            }
                                        </ListItemText>
                                    </>
                                ))
                            }
                        </List>
                    </Grid>
                    <Grid xs={1}>
                        <Button
                            onClick={handleOpenModalSignIn} 
                            sx={{
                                width:"44",
                                height:"44px"
                            }}
                        >
                            <Image
                                src="/../public/avatar/Avatar.png"
                                width={44}
                                height={44}
                                alt="avatar"
                            />
                        </Button>
                    </Grid>
                </Grid>
            {openModalSignIn && <ModalSignIn/>}
        </>
    )
}