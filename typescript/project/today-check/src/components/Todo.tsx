import { Grid, Typography } from "@mui/material";
import React from "react";
import TodoItem from "./TodoItem";
import { useTodosState } from "./hook/useTodoContext";

// 날짜 처리
// padStart() 메서드는 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환
function getFormatDate(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");

  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = daysOfWeek[today.getDay()];

  return `${year}/${month}/${day}/${dayOfWeek}요일`;
}

export default function Todo() {
  const todos = useTodosState();
  const todayFormat = getFormatDate();

  return (
    <Grid container xs={12} sx={{overflowY: "auto", maxHeight: "80vh"  }}>
      <Grid width="100%">
        <Grid item xs={12} display="flex" direction="column">
          <Typography
            variant="h5"
            color="black"
            sx={{
              p: 1,
              letterSpacing: 2,
              fontFamily: "Monospace",
              fontStyle: "italic",
            }}
          >
            {todayFormat}
          </Typography>
          <Typography
            variant="subtitle1"
            color="GrayText"
            sx={{ pl: 1, pr: 1, pb: 1 }}
          >
            오늘 할 일 {todos.length} 개
          </Typography>
        </Grid>
        <Grid sx={{ p: 1 }}>
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
