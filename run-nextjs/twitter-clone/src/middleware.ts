// auth as middleware으로 auth가 미들웨어 역할을 하게 됨
export { auth as middleware } from './auth';

// 미들웨어에 적용할 라우트로 공통점은 로그인을 해야 들어갈 수 있음
export const config = {
  matcher: ['/compose/tweet', '/home', '/export', '/message', '/search'],
};
