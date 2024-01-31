import React from "react";
import Header from "../components/Header";
import { Container, Grid, Paper } from "@mui/material";
import MyCalendarForm from "../components/MyCalendarFrom";
import InputTodo from '../components/InputTodo';
import MyFriend from '../components/MyFriend';
import Todo from '../components/Todo';
import FindFriend from '../components/FindFriend';

export default function Home() {
  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <Grid container spacing={1} xs={12}>
          <Grid item xs={3}>
            <Paper
              variant="outlined"
              square={false}
              sx={{
                p: 1,
                display: "flex",
                height: 400,
              }}
            >
              <FindFriend/>
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper
              variant="outlined"
              square={false}
              sx={{
                p: 1,
                display: "flex",
                height: 400,
              }}
            >
              <Todo/>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              square={false}
              variant="outlined"
              sx={{
                p: 1,
                display: "flex",
                height: 400,
              }}
            >
              <MyCalendarForm />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper
              square={false}
              variant="outlined"
              sx={{
                p: 1,
                display: "flex",
                height: 200,
              }}
            >
              <MyFriend/>
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper
              square={false}
              variant="outlined"
              sx={{
                p: 1,
                display: "flex",
                height: 200,
              }}
            >
              <InputTodo/>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
