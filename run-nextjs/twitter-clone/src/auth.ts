import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextResponse } from 'next/server';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  pages: {
    // 페이지들에 등록
    signIn: '/i/flow/login',
    newUser: '/i/flow/signup',
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const authResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}}/api/login`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              // 유저이름과 패스워드를 가짐(고정됨)
              id: credentials.username,
              password: credentials.password,
            }),
          }
        );

        // 유저 로그인 성공
        const user = await authResponse.json();
        console.log('user', user);

        // 리턴하는 정보는 지금 로그인한 유저의 아이디 이름 프로필 등
        return {
          email: user.id,
          name: user.nickname,
          image: user.image,
          ...user,
        };
      },
    }),
  ],
});
