import React from 'react';
import { AppBar, Button, Link, Toolbar, Typography } from '@mui/material';

export default function Header(){
  return (
    <AppBar
        position="static"
        elevation={0}
        sx={{bgcolor : "white"}}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h5" color="black" noWrap sx={{ flexGrow: 1 }}>
            마음을 전해요.
          </Typography>
          <nav>
          <Link
              variant="button"
              href="/"
              sx={{ my: 1, mx: 1.5, color: 'grey', textDecoration: 'none' }}
            >
              홈
            </Link>
            <Link
              variant="button"
              href="/message"
              sx={{ my: 1, mx: 1.5, color: 'grey', textDecoration: 'none' }}
            >
              메세지
            </Link>
          </nav>
          <Button href="/signin" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            로그인
          </Button>
        </Toolbar>
      </AppBar>
  );
};

