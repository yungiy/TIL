import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
export default function Header() {
  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: "white" }}>
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h5" color="black" noWrap sx={{ flexGrow: 1 }}>
          오늘도 체크!
        </Typography>
        <Button href="/signin" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          로그인
        </Button>
      </Toolbar>
    </AppBar>
  );
}
