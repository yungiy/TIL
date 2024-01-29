import { Grid, Typography } from "@mui/material";
import React from "react";

type Props = {};

export default function FriendList({}: Props) {
  return (
    <Grid container>
      <Grid item>
        <Typography variant="h6">익명1</Typography>
        <Typography variant="body1">내용</Typography>
      </Grid>
    </Grid>
  );
}
