import {Grid, List, ListItemText} from "@mui/material";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {NavBarTypes} from "@/types/Layouts";

const list = [
    {id: 1, text: 'Челленджи', url: '#'},
    {id: 2, text: 'Мир', url: '#'},
    {id: 3, text: 'Сообщества', url: '#'},
    {id: 4, text: 'Создать', url: '#'},
]
export const Navbar: React.FC<NavBarTypes> = ({children}) => {

    return (
        <div>
            <Grid container sx={{
                paddingTop: '20px',
                paddingBottom: '20px',
                alignItems: 'center',
            }}>
                <Grid item xs={1}>
                    <h1>Logo</h1>
                </Grid>
                <Grid xs={6}>
                    <List sx={{
                        display: "inline-list-item"
                    }}>
                        {
                            list.map((item) => (
                                <>
                                    <ListItemText>
                                        <Link href={item.url}>{item.text}</Link>
                                    </ListItemText>
                                </>
                            ))
                        }
                    </List>
                </Grid>
                <Grid xs={5}>
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
        </div>
    )
}