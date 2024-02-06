import React from "react";
import { AppBar,  Toolbar, Typography } from "@mui/material";
export default function Header() {
  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: "white" }}>
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h5" color="black" noWrap sx={{ flexGrow: 1, fontWeight: '500', fontFamily:'Monospace' }}>
          오늘도 체크!
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
