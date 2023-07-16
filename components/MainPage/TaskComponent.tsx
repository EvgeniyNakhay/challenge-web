import {Grid} from "@mui/material";
import {TitlePage} from "@/components/MainPage/titlePage";
import TaskDay from "@/components/MainPage/TaskDay";

const data = [
    {id: 1, date: "сегодня", tasks: ['Пить воду', "Пить водку"]},
    {id: 2, date: "вчера", task: 'Пить воду', img: true}
];

const TaskComponent = () => {
    return (
        <Grid container mt={2} p={2} sx={{
            background: "white",
            borderRadius: '2%'
        }}>
            <Grid xs={12}>
                <TitlePage title={"Задачи"} flag={false}/>
            </Grid>
            <Grid xs={12}>
                {
                    data.map(item => <TaskDay key={item.id} data={item}/>)
                }
            </Grid>
        </Grid>)
}

export default TaskComponent;