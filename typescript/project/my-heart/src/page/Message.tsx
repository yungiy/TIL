import { Grid, Typography } from "@mui/material";
import React from "react";
import Header from "../components/Header";

export default function Message() {
  return (
    <>
      <Header />
      <Grid container xs={12}>
        <Typography variant="h3">
          발신, 수신된 메세지 확인 및 친구 확인
        </Typography>
      </Grid>
    </>
  );
}
