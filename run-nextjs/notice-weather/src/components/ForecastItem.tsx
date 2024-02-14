import { Grid } from '@mui/material';

type Props = {
  date: string;
  temperature: number;
  conditionText: string;
  conditionIcon: string;
};

export default async function ForecastItem({
  date,
  temperature,
  conditionText,
}: Props) {
  return (
    <Grid p={1}>
      {date} / {temperature}도 / {conditionText}
    </Grid>
  );
}
