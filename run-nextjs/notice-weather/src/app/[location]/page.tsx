import CurrentWeatherCondition from "@/components/CurrentWeatherCondition";
import ForecastItem from "@/components/ForecastItem";
import HomeButton from "@/components/HomeButton";
import RevalidateButton from "@/components/RevalidateButton";
import { getForecast } from "@/utils/getForecast";
import { Container, Grid, Typography } from "@mui/material";

type Props = {
  params: {
    location: string;
  };
  searchParams: {
    name: string;
  };
};

export function generateMetadata({ searchParams }: Props) {
  return {
    title: `일주일의 일기예보 - ${searchParams.name}`,
    description: `${searchParams.name} 날씨를 알려드립니다`,
  };
}

export default async function Detail({ params, searchParams }: Props) {
  const name = searchParams.name;
  const { location, current, forecast } = await getForecast(params.location);

  return (
    <>
      <Container maxWidth="md">
        <Grid container display="flex" direction="column" spacing={1}>
          <Typography variant="h4" sx={{ pt: 2 }}>
            {name}의 일주일 날씨
          </Typography>
          <Grid item spacing={1} display="flex" direction="column">
            <HomeButton />
            <RevalidateButton tag="time" />
          </Grid>
          <Grid item sx={{ display: "flex", direction: "row", pr: 1 }}>
            <Typography variant="h6" pr={2}>
              오늘의 날씨{"  "}
            </Typography>
            <Grid item>
              <CurrentWeatherCondition
                timeZone={location.tz_id}
                conditionText={current.condition.text}
                conditionIcon={current.condition.icon}
              />
            </Grid>
          </Grid>
          <Grid item>
            {forecast.forecastday.map((day) => (
              <ForecastItem
                key={day.date}
                date={day.date}
                temperature={day.day.avgtemp_c}
                conditionText={day.day.condition.text}
                conditionIcon={day.day.condition.icon}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
