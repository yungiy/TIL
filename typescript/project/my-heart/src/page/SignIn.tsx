import React from "react";
import Header from "../components/Header";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { object, string } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpSchema = object({
  email: string().min(1, "이메일은 필수입니다.").email("@가 포함되어야합니다."),
  password: string()
    .min(1, "비밀번호는 필수입니다.")
    .min(8, "비밀번호는 8자 이상이어야 합니다.")
    .max(32, "비밀번호는 32자 이하여야 합니다."),
});

type ISignUp = {
  email: string;
  password: string;
};

export default function SignIn() {
  const methods = useForm<ISignUp>({
    resolver: zodResolver(signUpSchema),
  });

  const navigate = useNavigate();

  const onSubmitHandler: SubmitHandler<ISignUp> = async (values) => {
    try {
      const auth = getAuth();
      const { email, password } = values;

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user);
      navigate("/");
    } catch (error) {
      console.error("로그인 에러:", error);
    }
  };

  return (
    <>
      <Container>
        <Header />
        <Container
          maxWidth="xs"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5">로그인</Typography>
            <FormProvider {...methods}>
              <Box
                component="form"
                onSubmit={methods.handleSubmit(onSubmitHandler)}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoFocus
                  {...methods.register("email")}
                />
                {methods.formState.errors.email && (
                  <Typography variant="caption" color="error">
                    {methods.formState.errors.email.message}
                  </Typography>
                )}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  {...methods.register("password")}
                />
                {methods.formState.errors.password && (
                  <Typography variant="caption" color="error">
                    {methods.formState.errors.password.message}
                  </Typography>
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 3, mb: 2 }}
                >
                  로그인
                </Button>
                <Grid sx={{ mt: 1, flexDirection: "column", display: "flex" }}>
                  <Button variant="outlined" sx={{ marginBottom: "20px" }}>
                    카카오 로그인
                  </Button>
                  <Button sx={{ marginBottom: "20px" }}>구글 로그인</Button>
                  <Button sx={{ marginBottom: "20px" }}>네이버 로그인</Button>
                </Grid>
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
      </Container>
    </>
  );
}
