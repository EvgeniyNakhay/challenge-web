import {Container} from "@mui/material";


export default function Content({children}){
    return (
        <Container sx={{
            marginTop: '20px',
        }}>
            { children }
        </Container>
    )
}