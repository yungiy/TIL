import DeleteIcon from "@mui/icons-material/Delete";
import { useTodosDispatch } from "../components/hook/useTodoContext";
import { Divider, Grid, IconButton, Typography } from '@mui/material';

export type TodoItemProps = {
  todo: {
    id: number;
    text: string;
  };
};

export default function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useTodosDispatch();

  const handleDelete = () => {
    dispatch({ type: "REMOVE", id: todo.id });
  };

  return (
    <Grid>
      <Grid container display="flex" direction="row">
        <Grid item xs={11} p={1} display="flex" alignItems="center">
          <Typography variant="body1">{todo.text}</Typography>
        </Grid>
        <Grid item xs={1} alignItems="center">
          <IconButton onClick={handleDelete} sx={{ '&:hover': { color: 'red' } }}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
      <Divider />
    </Grid>
  );
}