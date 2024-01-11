## parseInt()와 Number()의 차이

**parseInt()와 Number()모두 문자열을 숫자로 바꿀 때 사용**

#### 1. 0이 반복되고 마지막 숫자 1로 구성된 문자열을 변환
```
let test = '000001';
parseInt(test); // 1
Number(test); // 1
```
둘 다 문자열을 숫자로 바꾸기 때문에 숫자 1로 변환

#### 2. 2024년이라는 '숫자 + 문자'로 구성된 문자열을 변환
```
let test = '2024년';
parseInt(test); // 2024
Number(test); // NaN
```
parseInt는 숫자부분만 파싱해서 2024만 변환
<br>
Number()는 문자열 전체가 유효한 숫자로 구성되지 않으면 NaN 반환

#### 3. '제81회' 라는 문자열을 변환
```
let test = '제81회';
parseInt(test); // NaN
Number(test); // NaN
```
**둘 다 NaN 반환**
<br>
그 이유는 parseInt는 문자열의 시작부터 숫자로 해석할 수 있는 부분을 추출하고 숫자가 아닌 문자를 만나면 멈춤
<br>
따라서 '제81회'에서 '제'가 숫자가 아니므로 NaN 반환

#### '정수8'인 숫자로 된 문자열에 소수점으로 길게 늘어진 숫자로 된 문자열 변환
```
let test = '8.12345';
parseInt(test); // 8
Number(test); // 8.12345
parseFloat(test); // 8.12345
```

Int는 정수값이므로 정수인 8만 반환
<br>
Number는 전체값을 반환

