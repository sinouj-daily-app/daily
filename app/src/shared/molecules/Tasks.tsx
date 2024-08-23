import {Task} from "../models/Task.ts";
import {Grid} from "@mui/joy";
import {TaskCard} from "../components/cards/TaskCard/TaskCard.tsx";
import {useEffect, useMemo, useState} from "react";
import {HomeService} from "../../services/HomeService.ts";
import {ApiService} from "../services/ApiService.ts";

export const Tasks = () => {

    const apiService = useMemo(() => new ApiService(), [])
    const homeService = useMemo(() => new HomeService(apiService), [apiService])

    const [tasks, setTasks] = useState<Task[]>();

    useEffect(() => {
        const tasks = async () => {
            return await homeService.getTasks()
        }
        tasks().then(res => setTasks(res.data))
    }, [homeService]);

    return (
        <>
            {tasks && tasks.map((task: Task) => {
                return (
                    <Grid xs={11} key={task.id}>
                        <TaskCard
                            id={task.id}
                            attributes={task.attributes}
                        />
                    </Grid>
                )
            })
            }
        </>
    )
}