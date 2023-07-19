import {CardTask} from "../tasks/components/CardTask.tsx";
import { HomeService } from "../services/HomeService.ts";
import {useEffect, useState} from "react";
import {ApiService} from "../shared/services/ApiService.ts";
import { Task } from "../shared/models/Task.ts";

export const Home = () => {
    const apiService = new ApiService()
    const homeService = new HomeService(apiService)

    const [tasks, setTasks] = useState<Task[]>();

    useEffect(() => {
        const tasks = async () => {
            return await homeService.getTasks()
        }

        tasks().then(res => setTasks(res.data))
    })


    return (
        <>
            <h1>date today</h1>
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