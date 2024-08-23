import {Card, CardContent, Typography} from "@mui/joy";
import {Task} from "../../../models/Task.ts";

export const TaskCard = ({attributes, id}: Task) => {
    return (
        <Card key={id}>
            <CardContent>
                <Typography level={"h3"}>category</Typography>
                <Typography level="body-lg">{attributes.content}</Typography>
                <p>author</p>
                <p>{`${attributes.createdAt}`}</p>
            </CardContent>
        </Card>
    )
}