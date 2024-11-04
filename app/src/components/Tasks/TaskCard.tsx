import { Card, CardContent, Typography } from '@mui/joy';
import { Task } from '@daily/shared/models';
import { DateService } from '@daily/shared/services';
import { useMemo } from 'react';

export const TaskCard = ({ task }: Task) => {
  const { id, title, description, author, updatedAt } = task;
  const dateService = useMemo(() => new DateService(), []);
  let relativeDate = dateService.getRelativeDate(updatedAt);

  return (
    <Card key={id}>
      <CardContent>
        <Typography level={'h3'}>{title}</Typography>
        <Typography level="body-lg">{description}</Typography>
        <p>{author.name}</p>
        <p>{relativeDate}</p>
      </CardContent>
    </Card>
  );
};
