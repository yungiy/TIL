import React from "react";
import Header from "../components/Header";
import { Container, Grid, Paper } from "@mui/material";
import InputTodo from "../components/InputTodo";
import Todo from "../components/Todo";

export default function Home() {
  return (
    <>
      <Container maxWidth="sm">
        <Header />
        <Grid container spacing={1} display='flex' direction='column'>
          <Grid item xs={6}>
            <Paper
              variant="outlined"
              square={false}
              sx={{
                p: 1,
                display: "flex",
                height: 400,
              }}
            >
              <Todo />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper
              square={false}
              variant="outlined"
              sx={{
                p: 1,
                display: "flex",
                height: 150,
              }}
            >
              <InputTodo />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
