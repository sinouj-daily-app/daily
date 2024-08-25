import {Card, CardContent, Typography} from "@mui/joy";
import {Task} from "@daily/shared/models";

export const TaskCard = ({task: {title, id, author, createdAt}}: Task) => {
    return (
        <Card key={id}>
            <CardContent>
                <Typography level={"h3"}>category</Typography>
                <Typography level="body-lg">{title}</Typography>
                <p>{author}</p>
                <p>{`${createdAt}`}</p>
            </CardContent>
        </Card>
    )
}