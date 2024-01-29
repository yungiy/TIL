import { AppBar, Container, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import NotiList from "./NotiList";

export default function Notify() {
  return (
    <Container
      maxWidth="lg"
      sx={{ border: "1px solid red", minHeight: "300px" }}
    >
      <Grid mb={2} mt={2}>
        <Typography variant="h5" color="black">
          나에게 온 메세지
        </Typography>
      </Grid>
      <NotiList />
    </Container>
  );
}
