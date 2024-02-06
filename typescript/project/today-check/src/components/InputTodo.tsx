import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useTodosDispatch } from './hook/useTodoContext';

export default function InputTodo() {
  const [task, setTask] = useState("");
  const dispatch = useTodosDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 빈 배열을 리턴할 때
    if (!task.trim()) {
      window.alert("내용을 입력해주세요");
      return;
    }

    dispatch({
      type: 'CREATE',
      text: task
    });
    setTask('');
  };
  
  return (
    <Grid container xs={12} component="form" onSubmit={onSubmit} >
      <Grid item xs={12} display="flex" direction="row">
        <TextField
          fullWidth
          placeholder="할 일을 추가해주세요"
          multiline
          rows={5}
          value={task}
          variant="filled"
          InputProps={{ disableUnderline: true }}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button variant="outlined" sx={{ ml: 1 }} onClick={onSubmit}>
          추가
        </Button>
      </Grid>
    </Grid>
  );
}
