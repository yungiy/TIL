/*
  그대로 출력햐기
  입력 받은 대로 출력하는 프로그램을 작성하시오.

  Input
  Hello
  Baekjoon
  Online Judge
  Output
  Hello
  Baekjoon
  Online Judge

*/

// 스트링으로 입력받고 그대로 출력
const input = require('fs').readFileSync('/dev/stdin').toString();

console.log(input);
