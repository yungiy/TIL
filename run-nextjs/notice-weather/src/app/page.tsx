import CurrentWeatherItem from "@/components/CurrentWeatherItem";
import RevalidateButton from "@/components/RevalidateButton";
import { Container, Grid, Typography } from "@mui/material";

export default async function Home() {
  const cities = [
    { name: "서울", code: "seoul" },
    { name: "뉴욕", code: "NYC" },
    { name: "런던", code: "london" },
  ];

  return (
    <>
      <Container maxWidth="md" sx={{ p: 2 }}>
        <Grid container display="flex" direction="column">
          <Grid item>
            <Typography variant="h4">날씨 앱</Typography>
          </Grid>
          <RevalidateButton tag="time" />
          <Grid item p={1}>
            {cities.map((city) => {
              return (
                <CurrentWeatherItem
                  key={city.code}
                  cityCode={city.code}
                  cityName={city.name}
                />
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
