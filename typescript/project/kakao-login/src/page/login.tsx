import { Box, Checkbox, Container, FormControlLabel, Grid, Stack, Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import { literal, string, object, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';

import { FC } from 'react';
import { LinkItem } from '../module/cssModule.tsx';
import FormInput from '../component/formInput.tsx';

const loginSchema = object({
  email: string()
    .min(1, "이메일은 필수입니다.")
    .email("이 이메일은 잘못된 이메일입니다."),
  password: string()
    .min(1, "패스워드는 필수입니다.")
    .min(8, "패스워드는 8글자 이상이어야합니다.")
    .min(32, "패스워드는 32글자 이하여야합니다."),
  persisUser: literal(true).optional(),
});

type ILogin = TypeOf<typeof loginSchema>;

const LoginPage: FC = () => {
  const defaultValues: ILogin = {
    email: '',
    password: '',
  };

  const methods = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
    defaultValues,
  });


  const onSubmitHandler: SubmitHandler<ILogin> = (values: ILogin) => {
    console.log(values);
  };


  return (
    <Container
      maxWidth={false}
      sx={{ height: '100vh', backgroundColor: { xs: '#fff', md: '#f4f4f4' } }}
    >
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        sx={{ width: '100%', height: '100%' }}
      >
        <Grid
          item
          sx={{ maxWidth: '70rem', width: '100%', backgroundColor: '#fff' }}
        >
          <FormProvider {...methods}>
            <Grid
              container
              sx={{
                boxShadow: { sm: '0 0 5px #ddd' },
                py: '6rem',
                px: '1rem',
              }}
            >
              <Grid
                item
                container
                justifyContent='space-between'
                rowSpacing={5}
                sx={{
                  maxWidth: { sm: '45rem' },
                  marginInline: 'auto',
                }}
              >
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ borderRight: { sm: '1px solid #ddd' } }}
                >
                  <Box
                    display='flex'
                    flexDirection='column'
                    component='form'
                    noValidate
                    autoComplete='off'
                    sx={{ paddingRight: { sm: '3rem' } }}
                    onSubmit={methods.handleSubmit(onSubmitHandler)}
                  >
                    <Typography
                      variant='h6'
                      component='h1'
                      sx={{ textAlign: 'center', mb: '1.5rem' }}
                    >
                      이메일로 로그인하기
                    </Typography>

                    <FormInput
                      label='Enter your email'
                      type='email'
                      name='email'
                      focused
                      required
                    />
                    <FormInput
                      type='password'
                      label='Password'
                      name='password'
                      required
                      focused
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          size='small'
                          aria-label='난 로봇이 아닙니다.'                         
                        />
                      }
                      label={
                        <Typography
                          variant='body2'
                          sx={{
                            fontSize: '0.8rem',
                            fontWeight: 400,
                            color: '#5e5b5d',
                          }}
                        >
                          난 로봇이 아닙니다.
                        </Typography>
                      }
                    />
                    <LoadingButton
                      loading={false}
                      type='submit'
                      variant='contained'
                      sx={{
                        py: '0.8rem',
                        mt: 2,
                        width: '80%',
                        marginInline: 'auto',
                      }}
                    >
                      로그인
                    </LoadingButton>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant='h6'
                    component='p'
                    sx={{
                      paddingLeft: { sm: '1.5rem' },
                      mb: '1.5rem',
                      textAlign: 'center',
                    }}
                  >
                    다른 방법으로 로그인하기
                  </Typography>
                  {/* <Box
                    display='flex'
                    flexDirection='column'
                    sx={{ paddingLeft: { sm: '3rem' }, rowGap: '1rem' }}
                  >
                    <OauthMuiLink href=''>
                      <KakaoLogo style={{ height: '2rem' }} />
                      카카오로 로그인하기
                    </OauthMuiLink>
                  </Box> */}
                </Grid>
              </Grid>
              <Grid container justifyContent='center'>
                <Stack sx={{ mt: '3rem', textAlign: 'center' }}>
                  <Typography sx={{ fontSize: '0.9rem', mb: '1rem' }}>
                    회원가입 하시겠어요?{' '}
                    <LinkItem to='/signup'>회원가입하기</LinkItem>
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </FormProvider>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;