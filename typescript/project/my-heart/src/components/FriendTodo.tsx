import { Divider, Grid, Typography } from "@mui/material";
import React from "react";

type Props = {};

export default function FriendTodo({}: Props) {
  return (
    <Grid width="100%">
      <Grid display="flex" p={1}>
        <Typography variant="body1">철수와 밥먹기</Typography>
      </Grid>
      <Divider />
      <Grid display="flex" p={1}>
        <Typography variant="body1">철수와 놀기</Typography>
      </Grid>
      <Divider />
    </Grid>
  );
}
