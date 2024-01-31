import { Dialog, Grid, Paper } from "@mui/material";
import React from "react";
import FriendCalendarForm from "./FriendCalendarForm";
import FriendTodo from "./FriendTodo";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function FriendSchedule({ open, onClose }: Props) {
  return (
    <Dialog open={open} onClose={onClose}>
      <Grid container>
        <Grid item xs={6}>
          <Paper
            elevation={0}
            square={false}
            sx={{
              p: 1,
              display: "flex",
              height: 400,
            }}
          >
            <FriendTodo />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            square={false}
            elevation={0}
            sx={{
              p: 1,
              display: "flex",
              height: 400,
            }}
          >
            <FriendCalendarForm />
          </Paper>
        </Grid>
      </Grid>
    </Dialog>
  );
}
