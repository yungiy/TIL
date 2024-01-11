/*
  문자열 반복
  
  문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. S에는 QR Code "alphanumeric" 문자만 들어있다.

  QR Code "alphanumeric" 문자는 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\$%*+-./: 이다.

  Input
  2
  3 ABC
  5 /HTP
  
  Output
  AAABBBCCC
  /////HHHHHTTTTTPPPPP

*/

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// Count 받기
let T = Number(input[0]);

// 테스트 케이스 처리
function testCase(R, S) {
	let result = ''
	for (let i = 0; i < S.length; i++) {
		for (let j = 0; j < R; j++) {
			result += S[i];
		}
	}
	console.log(result);
}

// T번의 테스트케이스 입력 후 처리
for (let TK = 1; TK <= T; TK++) {
	const [R, S] = input[TK].split(' ');
	testCase(Number(R), S);
}
