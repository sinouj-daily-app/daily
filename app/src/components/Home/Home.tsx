import { useEffect, useMemo, useState } from 'react';
import { DateService } from '@daily/shared/services';
import { Typography, Grid } from '@mui/joy';
import { Tasks } from '../Tasks/Tasks.tsx';

export const Home = () => {
  const dateService = useMemo(() => new DateService(), []);
  const [currentDate, setCurrentDate] = useState<string>();

  useEffect(() => {
    setCurrentDate(dateService.getTodaysDate());
  }, [dateService]);

  return (
    <>
      <Grid container justifyContent="center">
        <Typography level="h1" fontSize="xxx-large">
          {currentDate}
        </Typography>
      </Grid>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        disableEqualOverflow={true}
      >
        <Tasks />
      </Grid>
    </>
  );
};
