import {Card, CardContent, Typography} from "@mui/joy";
import {Task} from "@daily/shared/models";

export const TaskCard = ({task}: Task) => {

    const {id, title, description, author, updatedAt} = task;

    return (
        <Card key={id}>
            <CardContent>
                <Typography level={"h3"}>{title}</Typography>
                <Typography level="body-lg">{description}</Typography>
                <p>{author.name}</p>
                <p>{`${updatedAt}`}</p>
            </CardContent>
        </Card>
    )
}