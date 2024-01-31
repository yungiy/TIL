import { Divider, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

type Props = {};

export default function FindFriendItem({}: Props) {
  return (
    <Grid>
      <Grid container xs={12} display="flex" direction="row">
        <Grid item xs={2} p={1} display="flex" direction="row">
          <AccountBoxIcon fontSize="large" />
        </Grid>
        <Grid item xs={8} display="flex" alignItems="center" p={1}>
          <Typography variant="body1">친구 이름</Typography>
        </Grid>
        <Grid item xs={1} display="flex" alignItems="center" p={1}>
          <IconButton>
            <AddIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
      <Divider />
    </Grid>
  );
}
