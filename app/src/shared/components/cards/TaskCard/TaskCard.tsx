import {Card, CardContent} from "@mui/joy";

export const TaskCard = ({author, task, date}: Props) => {
    return (
        <Card>
            <CardContent>
                <p>{author}</p>
                <p>{task}</p>
                <p>{`${date}`}</p>
            </CardContent>
        </Card>
    )
}

interface Props {
    author: string,
    task: string,
    date: Date
}