import { Divider, Grid, IconButton, Typography } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DeleteIcon from "@mui/icons-material/Delete";
import EastIcon from "@mui/icons-material/East";
import React, { useState } from "react";
import FriendSchedule from "./FriendSchedule";

type Props = {};

export default function MyFriendItem({}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Grid>
        <Grid container xs={12} display="flex" direction="row">
          <Grid item xs={2} direction="row">
            <AccountBoxIcon fontSize="large" />
          </Grid>
          <Grid item xs={7} display="flex" alignItems="center">
            <Typography variant="body1">친구 이름</Typography>
          </Grid>
          <Grid item xs={1.5} alignItems="center">
            <IconButton>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Grid>
          <Grid item xs={1.5} alignItems="center">
            <IconButton onClick={handleOpenModal}>
              <EastIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
        <Divider />
      </Grid>

      {/* Modal */}
      <FriendSchedule open={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}
