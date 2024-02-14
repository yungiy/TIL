import { getCurrentWeather } from "@/utils/getCurrentWeather";
import CurrentWeatherCondition from "./CurrentWeatherCondition";
import Link from "next/link";
import { Grid, Typography } from "@mui/material";

type Props = {
  cityName: string;
  cityCode: string;
};

export default async function CurrentWeatherItem({
  cityName,
  cityCode,
}: Props) {
  const { current, location } = await getCurrentWeather(cityCode);
  const path = `/${cityCode}?name=${cityName}`;

  return (
    <Grid container key={cityName} sx={{ display: "flex", direction: "column" }}>
      <Grid item>
        <Typography variant='h6'>
          {cityName}의 지금 시간은
        </Typography>
      </Grid>
      <Typography variant='h6'>
      <CurrentWeatherCondition
          timeZone={location.tz_id}
          conditionText={current.condition.text}
          conditionIcon={current.condition.icon}
        />
      </Typography>
      <Typography variant='h6' sx={{color: 'inherit'}}>
        <Link href={path}>날씨 보러가기</Link>
      </Typography>
    </Grid>
  );
}
