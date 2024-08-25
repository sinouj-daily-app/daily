import {Task} from "@daily/shared/models";
import {Grid} from "@mui/joy";
import {TaskCard} from "./TaskCard.tsx";
import {useEffect, useMemo, useState} from "react";
import {HomeService} from "../Home/HomeService.ts";
import {ApiService} from "@daily/shared/services";

export const Tasks = () => {

    const apiService = useMemo(() => new ApiService(), [])
    const homeService = useMemo(() => new HomeService(apiService), [apiService])

    const [tasks, setTasks] = useState<Task[]>();

    useEffect(() => {
        const tasks = async () => {
            return await homeService.getTasks()
        }
        tasks().then(res => setTasks(res.data.tasks))
    }, [homeService]);

    return (
        <>
            {
                tasks && tasks.map((task: Task) => {
                    return (
                        <Grid xs={11} key={task.id}>
                            <TaskCard task={task}/>
                        </Grid>
                    )
                })
            }
        </>
    )
}