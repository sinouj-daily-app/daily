import {CardTask} from "../tasks/components/CardTask.tsx";
import { HomeService } from "../services/HomeService.ts";
import {useEffect, useMemo, useState} from "react";
import {ApiService} from "../shared/services/ApiService.ts";
import { Task } from "../shared/models/Task.ts";
import { DateService } from "../shared/services/DateService.ts";

export const Home = () => {

    const apiService = useMemo(() => new ApiService(), [])
    const homeService = useMemo(() => new HomeService(apiService), [apiService])
    const dateService = useMemo(() => new DateService(), [])

    const [tasks, setTasks] = useState<Task[]>();
    const [currentDate, setCurrentDate] = useState<string>()

    useEffect(() => {
        const tasks = async () => {
            return await homeService.getTasks()
        }

        setCurrentDate(dateService.getTodaysDate())
        tasks().then(res => setTasks(res.data))
    }, [dateService, homeService])


    return (
        <>
            <h1>{currentDate}</h1>
        {
                tasks && tasks.map((task: Task) => {
                    return (
                        <CardTask
                            key={task.id}
                            author={task.attributes.author}
                            task={task.attributes.content}
                            date={task.attributes.createdAt as unknown as string}
                        />
                    )
                })
            }
        </>
    )
}