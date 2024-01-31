import { Grid, Typography } from "@mui/material";
import React from "react";
import MyFriendItem from "./MyFriendItem";

type Props = {};

export default function MyFriend({}: Props) {
  return (
    <Grid container display="flex" direction="row">
      <Grid item width='100%'>
        <Typography variant="h6" sx={{ mb: 1 }}>
          친구 목록
        </Typography>
        <MyFriendItem />
      </Grid>
    </Grid>
  );
}
