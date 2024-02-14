"use client";

import { Button, Container, Typography } from "@mui/material";
import { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error("----", error.message);
  }, []);

  return (
    <>
      <Container maxWidth='md'>
        <Typography>에러 페이지입니다.</Typography>
        <Button
          variant='outlined'
          onClick={() => {
            reset();
          }}
        >
          새로고침
        </Button>
      </Container>
    </>
  );
}
