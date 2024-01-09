/*

  두 수 비교하기
  두 정수 A, B가 주어졌을 때 A와 B를 비교하는 프로그램을 작성하시오

*/
const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

if(a > b) {
  console.log(">");
} else if(a < b) {
  console.log('<');
} else {
  console.log('==');
};