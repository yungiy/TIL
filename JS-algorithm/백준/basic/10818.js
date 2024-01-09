/*
  최소 최대
  N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

  Input
  5
  20 10 35 30 7

  Output
  7 35
  
*/
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);
const num = input[1].split(' ').map(Number);

let min = 1000001;
let max = -1000001;

for (let i = 0; i < num.length; i++) {
    min = Math.min(min, num[i]);
    max = Math.max(max, num[i]);
}

console.log(min, max)

