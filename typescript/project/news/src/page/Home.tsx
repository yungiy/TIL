import { Container, Divider, Grid, Typography } from '@mui/material';
import Header from '../component/Header';
import NewsItem from '../component/NewsItem';
import useGetData from '../hook/useGetData';

interface HomeProps {
  Kr: string;
  Us: string;
  Fr: string;
}

export default function Home(props : HomeProps) {

  const { Kr, Us, Fr } = props
  
  const { loading: loadingKr, articles: articlesKr, error: errorKr } = useGetData('kr');
  const { loading: loadingUs, articles: articlesUs, error: errorUs } = useGetData('us');
  const { loading: loadingFr, articles: articlesFr, error: errorFr } = useGetData('fr');

  return (
  <>
     <Header />
      <Container sx={{ height: '100vh', marginTop: '100px', justifyContent: 'center' }}>
        <Grid item>
          <Typography variant="h4" gutterBottom>
            {Kr}
          </Typography>
          <Divider />
          <Grid>
            {loadingKr && <Grid >데이터를 가져오고 있습니다...</Grid>}
            {errorKr && <Grid>Error: {errorKr}</Grid>}
            {!loadingKr && !errorKr && articlesKr.map((article) => (
              <NewsItem key={article.url} article={article} />
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h4" gutterBottom>
            {Us}
          </Typography>
          <Divider />
          <Grid>
            {loadingUs && <Grid >데이터를 가져오고 있습니다...</Grid>}
            {errorUs && <Grid>Error: {errorUs}</Grid>}
            {!loadingUs && !errorUs && articlesUs.map((article) => (
              <NewsItem key={article.url} article={article} />
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h4" gutterBottom>
            {Fr}
          </Typography>
          <Divider />
          <Grid>
            {loadingFr && <Grid>데이터를 가져오고 있습니다...</Grid>}
            {errorFr && <Grid>Error: {errorFr}</Grid>}
            {!loadingFr && !errorFr && articlesFr.map((article) => (
              <NewsItem key={article.url} article={article} />
            ))}
          </Grid>
        </Grid>
      </Container>
  </>
  )
}


