import {Box, Container} from "@mui/material";
import TitlePage from "@/components/MainPage/titlePage";
import Aside from "@/components/MainPage/aside";
import TaskDay from "@/components/MainPage/taskDay";
import Statistics from "@/components/MainPage/statistic";
import Content from "@/layouts/content";

export default function Home() {
  return (
      <Content>
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
              <Statistics />
            </Box>
          </Box>
      </Content>
  )
}
