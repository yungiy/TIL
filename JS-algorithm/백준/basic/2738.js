/*
    행렬 덧셈
    N*M 크기의 두 행렬 a, b가 주워졌을 때 두 행렬을 더하는 프로그램을 작성하시오

    Input
    3 3
    1 1 1
    2 2 2
    0 1 0
    3 3 3   
    4 4 4
    5 5 100
    
    Output
    4 4 4
    6 6 6
    5 6 100

*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split();

let N = Number(input[0].trim().split(" ")[0]);
let M = Number(input[0].trim().split(" ")[1]);
let A = [];
let B = [];
let result =" ";
let arr;
let minArr;

for(let i=1; i<=N; i++){
  arr = input[i].trim().split(" ");
  minArr = [];

  for (let j = 0; j < M; j++) {
    minArr.push(arr[j]);
  }
  A.push(minArr);
}

for (let i = N + 1; i < input.length; i++) {
  arr = input[i].trim().split(" ");
  minArr = [];

  for (let j = 0; j < M; j++) {
    minArr.push(arr[j]);
  }
  B.push(minArr);
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    result += Number(A[i][j]) + Number(B[i][j]) + " ";
  }
  result += "\n";
}

console.log(result);