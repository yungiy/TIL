import { Grid, IconButton, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import React from "react";

export default function NotiList() {
  return (
    <Grid container xs={12}>
      <Grid item xs={11.5} sx={{ direction: "row" }}>
        <Typography variant="h6">ooo 님이 메세지를 보냈습니다.</Typography>
        <Typography variant="body1">
          안녕?
          ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
        </Typography>
      </Grid>
      <Grid item xs={0.5} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <IconButton>
          <ArrowOutwardIcon />
        </IconButton>
      </Grid>
      <Grid item xs={11.5} sx={{ direction: "row" }}>
        <Typography variant="h6">ooo 님이 메세지를 보냈습니다.</Typography>
        <Typography variant="body1">
          안녕?
          ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
        </Typography>
      </Grid>
      <Grid item xs={0.5} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <IconButton>
          <ArrowOutwardIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
