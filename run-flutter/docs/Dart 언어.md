# Dart 언어에 대해서 알아보기

## Dart 언어의 장점
* 다트 언어는 UI를 제작하는데 최적화되어 있으며 완전한 비동기 언어이며 이벤트기반 언어이다.
* 아이솔레이트(Isolate)를 지원해 동시성 기능도 제공한다. 
* 널 세이프, 스프레드 기능, 콜렉션 if문 등 효율적으로 UI를 코딩할 수 있다. 
* 핫 리로드를 통해 코드의 변경사항을 즉시 화면에 반영할 수 있다. 
* 멀티 플랫폼에서 로깅, 디버깅, 런이 가능하다.
* 자바스크립트로의 완전한 컴파일이 가능하다. 
* 백엔드 프로그래밍을 지원한다. 
* AOT 프로그래밍으로 어떤 플랫폼에서도 빠른 개발이 가능하다. 

## 다트 언어의 컴파일 플랫폼 
다트 언어는 자바스크립트 언어로 완전한 컴파일이 가능하며 네이티브 플랫폼과 똑같이 증분 컴파일 (incremental compile)을 지원한다. 증분 컴파일이란 프로그램의 수정된 부분만 다시 컴파일하는 기술이다. Dart 언어는 모바일이나 데스크탑 기기를 타겟으로 하는 네이티브 플랫폼과 웹을 타겟팅하는 웹 플랫폼으로 컴파일할 수 있다. 

다트 네이티브 플랫폼은 JIT(Just In Time) 컴파일 방식과 AOT(Ahead of Time) 컴파일 방식을 사용한다. JIT 컴파일 방식은 다트 가상 머신에서 제공하는 기능으로 코드의 변경된 사함을 처음부터 다시 컴파일할 필요 없이 즉시 화면에 반영하는 핫리로드(Hot Reload)기능, 실시간 매트릭스(Metrics)를 확인할 수 있는 기능 디버깅 기능 제공한다. 

개발하는 도중에는 하드웨어 리소스를 적게 사용하는 것보다 개발 효율성이 중시되므로 JIT 컴파일 방식을 사용하지만 소프트웨어를 배포할 때는 컴파일이 되어 있어야 더욱 리소스를 효율적으로 사용 가능하다. 그래서 배포할 때에는 AOT 컴파일 방식으로 컴파일을 한다. AOT 컴파일 방식을 사용하면 ARM64나 X64 기계어로 다트 언어가 직접 컴파일이 되어 효율적인 프로그램 실행이 가능해진다. 

## 핵심 요약
1. Dart의 기번 타입에는 **string, int, double, bool**이 있다.
2. **dynamic 키워드**는 어떤 타입이든 저장할 수 있는 변수를 선언할 때 사용한다.
3. Dart의 대표적인 컬렉션 타입은 **List, Map, Set**이다.
  * List는 여러 값을 순서대로 저장하는 컬렉션
  * Map은 키와 값을 짝지어 저장하는 컬렉션
  * Set은 중복되는 값이 존재하지 않는 컬렉션
4. **if문과 switch문을 사용**해서 조건문을 실행할 수 있다.
5. **for문, while문, do..while문을 사용**해 반복문을 사용할 수 있다. 
6. 함수는 **반환값, 매개변수, 실행문**으로 이뤄져 있다. 
7. **익명함수와 람다함수** 모두 이름이 없으며 일회성으로 쓸 때 사용한다. 
9. **typedof**는 함수의 시그니처만 정의할 수 있다. 

# 다트 객체지향 프로그래밍
다트 언어는 높은 완성도의 객체지향 프로그래밍을 지원하며 OOP중심으로 설계된 프레임워크이다. 

## 객체지향 프로그래밍의 필요성 
객체지향 프로그래밍으로 변수와 메서드를 특정 클래스에 종속되게 코딩할 수 있다. 클래스를 사용해 서로 밀접한 관계가 있는 함수와 변수를 묶어두면 코드 관리가 용이하기 때문에 현대 프로그래밍에서 상당히 중요하다.

* 클래스는 일종의 설계도로 데이터가 보유할 속성과 기능을 정의하는 자료구조
* 인스턴스란 클래스를 이용해 객체를 선언하며 해당 객체를 클래스의 인스턴스라 함
* 인스턴스화란 클래스에서 인스턴스(객체)를 생성하는 과정을 말함

## 클래스
```
class Weather {
  String season = summer;

  void SaySeason(){
    // this를 사용해서 클래스 내부 속성 지칭 
    print('지금은 ${this.season}입니다.');
    // 범위 안에 속성이름이 하나면 this 생략 가능
    print('지금은 $season입니다.');
  }
}
```
this 키워드는 클래스에 종속된 값을 지칭할 때 사용하며 함수 내부에 같은 이름의 변수가 없으면 키워드를 생략할 수 있다. 

```
void main(){
  // 인스턴스 생성 
  Weather fourSeason = Weather();

  // 메서드 실행
  fourSeason.SaySeason();
}
```

### 생성자
생성자는 클래스의 인스턴스를 생성하는 메서드로 생성자를 사용해서 활용도를 높힐 수 있다.
```
class Weather {
  // 생성자 입력 변수 final로 선언
  final String season;

  //생성자 선언
  Weather(String season) : this.season = season;

  void SaySeason(){
    // this를 사용해서 클래스 내부 속성 지칭 
    print('지금은 ${this.season}입니다.');
  }
}
```

### 네임드 생성자
네임드 생성자는 네임드 파라미터와 비슷한 개념으로 일반적으로 클래스를 생성하는 여러 방법을 명시할 때 사용한다. 
```
class Weather {
  final String season;
  final int seasonCount;

  // 생성자
  Weather(String season, int seasonCount)
  : this.season = season,
    this.seasonCount = seasonCount;

  // 네임드 생성자
  Weather.fromMap(Map<String, dynamic > map)
  : this.season = map['season'],
    this.seasonCount = map['seasonCount'];

  void SaySeason(){
    print('지금은 ${this.season}입니다. 계절은 ${this.seasonCount}개입니다.');
  }
}

void main(){

  //기본 생성자 사용
  Weather fourSeason = Weather('summer', 4);
  fourSeason.SaySeason();

  //네임드 생성자 사용
  Weather fourSeason.fromMap({
    'name': 'summer',
    'seasonCount' : 4, 
  });
  summer.sayName();
}
```

### 프라이빗 변수
다트에서의 프라이빗 변수는 같은 파일에서만 접근 가능한 변수이다.
```
class Weather {
  // _(언더바)로 변수명을 시작하면 프라이빗 변수 선언 가능
  String _season;

  Weather(this._season);
}

void main(){
  
}
```
### 게터/세터 getter/setter

## 상속

## 오버라이드

## 인터페이스

## 믹스인

## 제네릭

## 스태틱

## 캐스케이드 연산자


