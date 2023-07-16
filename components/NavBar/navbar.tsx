import {Grid, List, ListItemText, Typography} from "@mui/material";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {NavBarTypes} from "@/types/Layouts";
import Button from "@mui/material/Button";

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
export const Navbar: React.FC<NavBarTypes> = ({children}) => {

    return (
        <>
            <Grid container sx={{
                paddingTop: '2vh',
                paddingBottom: '2vh',
            }}>
                <Grid xs={3}>
                    <h1>Logo</h1>
                </Grid>
                <Grid xs={7}>
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
                <Grid xs={1} sx={{
                    border: '1px solid'
                }}>
                    <div>
                        <Image
                            src="/../public/avatar/Avatar.png"
                            width={44}
                            height={44}
                            alt="avatar"
                        />
                    </div>
                </Grid>
            </Grid>
            {children}
        </>
    )
}