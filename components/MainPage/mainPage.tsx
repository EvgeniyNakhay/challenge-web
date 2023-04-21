import { Container, Box } from '@mui/material';
import TitlePage from "./titlePage";
import Aside from './aside';
import TaskDay from './taskDay';

export default function Main(){

  return (
    <Container sx={{
      marginTop: '20px',
    }}>
      <Box display="grid" gridTemplateColumns="245px auto 350px" columnGap="16px" rowGap="32px">
        <Box gridColumn="2 / 4">
          <TitlePage title={"Пить воду"}/>
        </Box>
        <Box gridColumn="span 1">
          <Aside/>
        </Box>
        <Box gridColumn="span 1">
          <TaskDay />        
        </Box>
        <Box gridColumn="span 1">
          <div>Календарь</div>
        </Box>
      </Box>
    </Container>
  )
}