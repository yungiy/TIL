import { Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography } from '@mui/material';
import React from 'react';
import { TypeOf, object, string } from 'zod';

const signupSchema = object({
  name: string().min(1, '이름은 필수입니다.').max(70),
  email: string().min(1, '이메일은 필수입니다.').email('이메일이 일치하지 않습니다.'),
  password: string()
    .min(1, '비밀번호는 필수입니다.')
    .min(8, '비밀번호는 8자 이상이어야 합니다.')
    .max(32, '비밀번호는 32자 이하여야 합니다.'),
  passwordConfirm: string().min(1, '비밀번호가 다릅니다. 확인해주세요'),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ['passwordConfirm'],
  message: '비밀번호가 일치하지 않습니다.',
});

type ISignUp = TypeOf<typeof signupSchema>;

export default function SignUp() {

  return (
      <Container component="main" maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CssBaseline />
        <Grid
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  name="fullName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="PassworConfirm"
                  type="password"
                  id="passwordconfirm"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
            >
              회원가입
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  이미 계정이 있으세요? 로그인
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Container>
  );
}