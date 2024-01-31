import { Button, Grid, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import "dayjs/locale/ko";
import React from "react";

type Props = {}

export default function InputTodo({}: Props) {
  return (
    <Grid container xs={12}>
      <Grid item xs={12}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
          <DemoContainer components={["startDay", "endDay"]}>
            <Grid xs={6}>
              <DateField
                label="시작일을 입력해주세요."
                fullWidth
                format="YYYY-MM-DD"
                variant='filled'
                InputProps={{ disableUnderline: true }}
              />
            </Grid>
            <Grid xs={6}>
              <DateField
                label="종료일을 입력해주세요."
                fullWidth
                format="YYYY-MM-DD"
                variant='filled'
                InputProps={{ disableUnderline: true }}
              />
            </Grid>
          </DemoContainer>
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} display="flex" direction="row">
        <TextField fullWidth placeholder='할 일을 추가해주세요' multiline rows={4} variant="filled" InputProps={{ disableUnderline: true }}/>
        <Button variant="outlined" sx={{ ml: 1, mb: 1 }}>
          추가
        </Button>
      </Grid>
    </Grid>
  );
}
