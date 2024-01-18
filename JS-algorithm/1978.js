/*
  소수찾기
  주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오

  Input
  4
  1 3 5 7
  Output
  3

*/

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let testCase = Number(input[0]);

let splited = input[1].split(' ').map((item) => Number(item));
let result = 0;

// 만약 값이 1이라면 소수가 아니므로 컨티뉴
for(let i=0; i<splited.length; i++){
  if(splited[i] === 1){
    continue;
  } else {
    let count = 0;
    for(let j=2; j<splited[i]; j++){
      if(splited[i]%j === 0){
        count++;
      }
    }
    if(count === 0){
      result++;
    }
  }
}

console.log(result);