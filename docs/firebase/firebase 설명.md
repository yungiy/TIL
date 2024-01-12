# 파이어베이스

> **본 글은 파이어베이스를 플러터에서 사용하는 목적으로 작성되었습니다.**

파이어베이스는 구글이 인수한 모바일 앱 개발에 최적화된 기능을 제공하는 서비스로 다음과 같은 기능이 있다. 

|이름|기능|
|:---:|:---:|
|Authentication|소설 인증, 이메일 인증, 핸드폰 인증 등의 기능을 쉽게 연동|
|App Check|보안 기능으로 허가되지 않은 클라이언트가 api 요청을 해 리소스를 낭비하는 것을 막음|
|FireStore|실시간으로 클라이언트와 서버의 데이터를 연동할 수 있고 강력한 쿼리 기능을 제공하는 NoSql 기능|
|Realtime Databases| 파이어스토어와 비슷한 NoSql 데이터베이스 기능을 제공하며 빠른 속도와 효율에 초점을 맞춤|
|Hosting|웹 앱, 정적, 및 동적 콘텐츠, 마이크로 서비스를 빠르고 안정적으로 호스팅|
|Storage|이미지, 오디오, 비디오 등 사용자 생성하는 콘텐츠를 저장할 수 있는 저장소|
|Functions|파이어베이스 또는 HTTPS 요청으로 서버ㅡㄹ 실행할 수 있는 기능 트래픽에 따라 필요한 만큼 확장되기 때문에 인프라 관리는 필요없음|
|ML|텍스트 인식, 이미지 라벨링, 물체 감지 및 추척, 얼굴 감지 및 윤곽 추적 같은 머신러닝 기능 사용 가능|
|Remote Config|앱의 동작 모양과 기능을 앱을 새로 배포하지 않고 변경할 수 있게 편의성 기능 제공|
|Crashlytics|앱에 충돌이 있을 경우 정확한 문제와 로그를 파악하는 기능|
|Performance|앱의 성능 모니터링|
|Test lab|구글 데이터 센터에 실행되는 실제 여러 프로덕션 기기를 사용해 앱을 테스트|
|App Distribution|앱을 더 빠로고 쉽게 배포 가능|
|Analytics| 앱의 트래픽 등 사용자 활동 모니터링 및 분석 가능|
|Messaging|푸시 알림 설정|

## 파이어스토어
일반 데이터베이스와 같이 CRUD 기능을 제공한다파이어스토어는 두 가지 데이터 개념이 있는데 컬렉션과 문서 이다. SQL 기반의 데이터베이스와 비교하면 컬렉션은 테이블에 해당되고 문서는 열에 해당된다. NoSql 문서는 sql 데이터베이스와 비교해 더 유연한 데이터 구조 사용할 수 있다. **예를 들어 SQL의 테이블에는 행과 열의 조합으로 하나의 행과 열 조합에는 하나의 값만 입력할 수 있다. 하지만 NoSql 문서에는 키와 값의 조합으로 하나의 값이 들어가는 위치에 리스트나 맵으로 JSON 구조로 저장 가능하다**

### 파이어스토어 문서 삽입
1. add()함수 사용
자동으로 문서의 ID 값 생성한다.
```
final data = {
  'name' : 'yungiy',
  'age' : '25',
  'favoriteColors' : ['red', 'blue', 'green'],
};

FirebaseFirestore.instance
  .collection('person')
  .add(data);
```
2. set()함수 사용
수동으로 ID값을 넣어줄 수 있다.
```
final data = {
  'name' : 'yungiy',
  'age' : '25',
  'favoriteColors' : ['red', 'blue', 'green'],
};

FirebaseFirestore.instance
  .collection('person')
  .doc('1')
  .set(data);
```
### 파이어스토어 문서 삭제
* delete()함수를 사용해 문서를 삭제할 수 있다.
컬렉션 함수에 선택할 컬렉션 이름을 입력하고 doc() 함수에 삭제할 문서의 ID를 입력하고 마지막에 delete() 함수를 실행한다. 
```
FirebaseFirestore.instance
  .collection('person')
  .doc('1')
  .delete();
```
### 파이어스토어 문서 조회
파이어스토어는 강력한 문서 조회 기능을 제공하는데 데이터가 변경될 때마다 실시간(Stream)으로 업데이트를 반영받을 수 있으며 1회성(Future) 데이터를 업데이트 받을 수 있음
1. Stream 실시간
```
FirebaseFirestore.instance
  .collection('person')
  .snapshots();
```
2. Future 일회성
```
FirebaseFirestore.instance
  .collection('person')
  .get();
```
3. 특정 문서 가져오기
특정 문서를 가져오고 싶으면 doc()함수를 사용해서 ID 값을 매개변수로 입력한다. 이후 snapshots(), get()으로 처리할 수 있다. 
```
FirebaseFirestore.instance
  .collection('person')
  .doc('1')
  .get();
```

### 파이어스토어 문서 변경(업데이트)
update() 함수를 사용해서 변경 가능하다. 
```
FirebaseFirestore.instance
  .collection('person')
  .doc('1')
  .update({
    'name' : 'yun',
  });
```

