import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { object, string } from 'zod';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const loginSchema = object({
  email: string()
    .min(1, '이메일은 필수입니다.')
    .email('@가 포함되어야합니다.'),
  password: string()
    .min(1, '비밀번호는 필수입니다.')
    .min(8, '비밀번호는 8자 이상이어야 합니다.')
    .max(32, '비밀번호는 32자 이하여야 합니다.'),
});

type ILogin = {
  email: string;
  password: string;
};

export default function Login() {

  const methods = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
  });

const navigate = useNavigate();

  const onSubmitHandler: SubmitHandler<ILogin> = async (values) => {
    try {
      const auth = getAuth(); 
      const { email, password } = values;
  
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential.user);
      navigate('/');
    } catch (error) {
      console.error('로그인 에러:', error);
    }}

  return (
    <Container maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h5">로그인</Typography>
        <FormProvider {...methods}>
          <Box component="form" onSubmit={methods.handleSubmit(onSubmitHandler)} noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth id="email" label="Email Address" autoFocus {...methods.register('email')} />
            {methods.formState.errors.email && (
              <Typography variant="caption" color="error">
                {methods.formState.errors.email.message}
              </Typography>
            )}
            <TextField margin="normal" required fullWidth label="Password" type="password" id="password" {...methods.register('password')} />
            {methods.formState.errors.password && (
              <Typography variant="caption" color="error">
                {methods.formState.errors.password.message}
              </Typography>
            )}
            <Button type="submit" fullWidth variant="outlined" sx={{ mt: 3, mb: 2 }}>
              로그인
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item xs>
                <Link href="/signup" variant="body2">
                  회원가입
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" variant="body2">
                  홈으로 가기
                </Link>
              </Grid>
            </Grid>
          </Box>
        </FormProvider>
      </Grid>
    </Container>
  );
}
