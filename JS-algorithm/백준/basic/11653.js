/*
  소인수분해
  정수 N이 주어졌을 때, 소인수분해하는 프로그램을 작성하시오.

*/

let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split("\n").map(Number);

let N = input.shift();
let result = [];

for (let i = 2; i <= N; i++) {
  while (N % i === 0) {
    N /= i;
    answer.push(i);
  }
  if (N === 1) break;
}

result.forEach((number) => console.log(number));