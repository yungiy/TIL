import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string } from "zod";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Header from "../components/Header";

const signupSchema = object({
  name: string().min(1, "이름은 필수입니다.").max(70),
  email: string().min(1, "이메일은 필수입니다.").email("@가 포함되어야합니다"),
  password: string()
    .min(1, "비밀번호는 필수입니다.")
    .min(8, "비밀번호는 8자 이상이어야 합니다.")
    .max(32, "비밀번호는 32자 이하여야 합니다."),
  passwordConfirm: string().min(1, "비밀번호가 다릅니다. 확인해주세요"),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ["passwordConfirm"],
  message: "비밀번호가 일치하지 않습니다.",
});

type ISignUp = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export default function SignUp() {
  const methods = useForm<ISignUp>({
    resolver: zodResolver(signupSchema),
  });

  const navigate = useNavigate();

  const onSubmitHandler: SubmitHandler<ISignUp> = async (values) => {
    try {
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      console.log("회원가입 성공:", user);
      navigate("/login");
    } catch (error) {
      console.error("회원가입 실패:", error);
    }
  };

  return (
    <>
      <Header />
      <Container
        component="main"
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
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
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
                id="name"
                label="Full Name"
                {...methods.register("name")}
              />
              {methods.formState.errors.name && (
                <Typography variant="caption" color="error">
                  {methods.formState.errors.name.message}
                </Typography>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
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
              <TextField
                margin="normal"
                required
                fullWidth
                label="Password Confirm"
                type="password"
                id="passwordConfirm"
                {...methods.register("passwordConfirm")}
              />
              {methods.formState.errors.passwordConfirm && (
                <Typography variant="caption" color="error">
                  {methods.formState.errors.passwordConfirm.message}
                </Typography>
              )}
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
              >
                회원가입
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item xs>
                  <Link href="/signin" variant="body2">
                    이미 계정이 있으세요? 로그인
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
    </>
  );
}
