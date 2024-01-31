import { Grid, Typography } from "@mui/material";
import React from "react";
import TodoItem from "./TodoItem";

type Props = {};

export default function Todo({}: Props) {
  return (
    <Grid container xs={12}>
      <Grid width="100%">
        <Grid item xs={10} display="flex" alignItems="center" >
          <Typography variant="h6" sx={{ mb: 1 }}>
            할 일 {0} 개
          </Typography>
        </Grid>
        <TodoItem />
      </Grid>
    </Grid>
  );
}
