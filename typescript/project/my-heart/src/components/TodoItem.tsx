import {
  Divider,
  Grid,
  IconButton,
  Typography,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import SaveIcon from "@mui/icons-material/Save";
import React, { useState } from "react";

type Props = {};

export default function TodoItem({}: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState("");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  return (
    <Grid>
      <Grid container xs={12} display="flex" direction="row">
        <Grid
          item
          xs={isEditing ? 11 : 10}
          p={1}
          display="flex"
          alignItems="center"
        >
          {isEditing ? (
            <TextField
              size="small"
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              fullWidth
              value={task}
              onChange={handleInputChange}
              autoFocus
            />
          ) : (
            <Typography variant="body1">{task}</Typography>
          )}
        </Grid>
        {isEditing ? (
          <Grid
            item
            xs={1}
            alignItems="center"
            justifyContent="center"
            display="flex"
          >
            <IconButton onClick={handleSaveClick}>
              <SaveIcon fontSize="small" />
            </IconButton>
          </Grid>
        ) : (
          <>
            <Grid item xs={1} alignItems="center">
              <IconButton onClick={handleEditClick}>
                <ModeEditIcon fontSize="small" />
              </IconButton>
            </Grid>
            <Grid item xs={1} alignItems="center">
              <IconButton>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Grid>
          </>
        )}
      </Grid>
      <Divider />
    </Grid>
  );
}
