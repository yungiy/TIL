import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Header from '../component/Header';

export default function Home() {
  return (
  <Container>
    <Header/>
      <Grid xs={12} marginTop='50px' display='flex' justifyContent='center'>
        <Typography variant='h1'>
          Home
        </Typography>
      </Grid>
  </Container>
  )
}