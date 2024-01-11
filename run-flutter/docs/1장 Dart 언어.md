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
class Idol {

  String name = '에스파';

  void sayName(){
     print('저희는 ${this.name}입니다.');
     // 스코프 안에 같은 속성 이름이 하나만 존재하면 this 생략 가능
     print('저희는 $name입니다.'); 
  }
}

void main(){
  // Idol 인스턴스 생성
  Idol aespa = Idol();
  
  // 메서드 실행
  aespa.sayName();
}

```
```
Output
저희는 에스파입니다.
저희는 에스파입니다.
```

### 생성자
생성자는 클래스의 인스턴스를 생성하는 메서드로 생성자를 사용해서 활용도를 높힐 수 있다.
```
class Idol {
  // 생성자에서 입력받는 변수들은 일반적으로 final 키워드 사용
  final String name;

  // 생성자 선언
  // 클래스와 같은 이름으로 함수의 매개변수를 선언하는 것처럼 매개변수 지정
  Idol(string name) : this.name = name;

  void sayName(){
    print('저희는 ${this.name}입니다.');
  }
}
void main(){
  // Idol 인스턴스 생성
  Idol aespa = Idol('에스파');
  aespa.sayName();

  // name에 'LESSERAFIM' 저장
  Idol lesserafim = Idol('르세라핌');
  lesserafim.sayName();
}
```
```
Output
저희는 에스파입니다.
저희는 르세라핌입니다.
```

### 네임드 생성자
네임드 생성자는 네임드 파라미터와 비슷한 개념으로 일반적으로 클래스를 생성하는 여러 방법을 명시할 때 사용하며 클래스를 여러 방식으로 인스턴스화할 때 유용하다.
```
Class Idol {
  final String name;
  final int memberCount;

  // 생성자
  Idol(String name, int memberCount)
  // 한 개 이상의 변수를 저장하고 싶을 때는 , 기호로 연결
    : this.name = name,
      this.memberCount = memberCount;

  // 네임드 생성자 
  // {클래스 명, 네임드 생성자 명} 형식
  // 나머지 과정은 기본 생성자와 동일
  Idol.fromMap(Map<String, dynamic> map)
    : this.name = map['name'],
      this.memberCount = map['memberCount'];

  void sayName() {
    print('저희는${this.name}입니다. ${this.name} 멤버는 ${this.memberCount}명 입니다.');
  }
}

void main(){
  // 기본 생성자 사용
  Idol aespa = Idol('에스파', 4);
  aespa.sayName();

  //formMap이라는 네임드 생성자 사용
  Idol lesserafim = Idol.fromMap({
    'name' : '르세라핌',
    'memberCount' : 5,
  });
  lesserafim.sayName();
}
```
```
Output
저희는 에스파입니다. 에스파 멤버는 4명입니다.
저희는 르세라핌입니다. 르세라핌 멤버는 5명입니다.
```
### 프라이빗 변수
다트에서의 프라이빗 변수는 같은 파일에서만 접근 가능한 변수이다.
```
class idol {
  // 프라이빗 변수 선언
  String _name;
  Idol(this._name);
}

void main(){
  Idol aespa = Idol('에스파');

  // 같은 파일에서는 _name에 접근 가능, 하지만 다른 파일에서는 불가능
  print(aespa._name);
}
```
### 게터/세터 getter/setter
게터는 말 그대로 값을 가져올 때 사용되며 세터는 값을 지정할 때 사용된다. 가변 변수를 선언해도 직접 값을 가져오거나 지정할 수 있지만 게터와 세터를 사용하면 어떤 값이 노출되고 어떠한 형태로 노출될지, 어떤 변수를 가능하게 할지 유연하게 정할 수 있습니다. 
<br>
최근에는 객체지향 프로그래밍을 할 때 변수의 값을 불변성으로 선언하는 특성으로 사용하기 때문에 세터는 거의 사용하지 않습니다. 하지만 게터는 종종 사용하므로 알아둬야 합니다. 
```
class Idol{
  String _name = '에스파';

  // get키워드로 게터임을 명시
  // 게터는 메서드와 다르게 매개변수를 받지 않음
  String get name {
    return this._name;
  }

  // 세터는 set 키워드로 선언
  // 세터는 매개변수로 딱 하나의 변수만 가능
  set name(String name){
    this._name = name;
  }
}

void main(){
  Idol aespa = Idol();
  aespa.name = '아이브'; // 세터로 '아이브' 대입
  print(aespa.name); // 게터로 확인하니 '아이브'로 저장되어 있음
}
```
```
Output
아이브
```
### 상속
extends 키워드를 사용해 상속할 수 있다. 상속은 어떤 클래스의 기능을 다른 클래스가 사용할 수 있게 하는 기법이다. 기능을 물려주는 부모 클래스, 물려받는 클래스를 자식 클래스라 한다. 
```
class Idol{
  final String name;
  final int memberCount;

  Idol(this.name, this.memberCount);

  void sayName(){
    print('저희는 ${this.name}입니다.');
  }

  void sayMemberCount(){
    print('${this.name} 멤버는 ${this.memberCount}명 입니다.');
  }
}
```
위 Idol 클래스를 상속하는 SmGroup 클래스를 만들어 보겠다.
```
class SmGroup extends Idol {

  // 상속 받은 생성자
  SmGroup(
    String name,
    int memberCount,
  ) : super( // super는 부모 클래스를 지칭
    name,
    memberCount
  );

  // 상속받지 않은 기능
  void sayCompany(){
    print('저희는 sm 소속입니다.')
  }
}

void main(){
  SmGroup aespa = SmGroup('에스파', 4);

  aespa.SayName(); // 부모한테 물려받은 메서드
  aespa.sayMemberCount(); // 부모한테 물려받은 메서드
  aespa.sayCompany(); // 자식이 새로 추가한 메서드
}
```
```
Output
저희는 에스파입니다.
에스파 멤버는 4명입니다.
저희는 sm 소속입니다.
```
#### 만약 부모가 같은 다른 자식 클래스가 SmGroup에 새로 추가한 sayCompany 메서드를 호출할 수 있을까?

정답은 **"그럴 수 없다."** 이다. 

### 오버라이드
오버라이드는 부모 클래스 또는 인터페이스에 정의된 메서드를 재정의할 때 사용된다. 다트에서는 override 키워드를 생략할 수 있어 override 키워드를 사용하지 않고 오버라이드할 수 있다.
```
class HiveGroup extends Idol{
  HiveGroup(
    super.name,
    super.memberCount,
  );

  @override
  void sayName(){
    print('저희는 하이브 아이돌 ${this.name}입니다.');
  }
}
void main(){
  HiveGroup lesserafim = HiveGroup('르세라핌', 5);

  // 자식 클래스와 오버라이드된 메서드 사용
  lesserafim.sayName();

  // 부모 클래스 메서드 사용
  // sayMemberCount는 오버라이드 하지 않았기 때문에 Idol 클래스 메서드 실행
  lesserafim.sayMemberCount();
}

```

```
Output
저희는 하이브 아이돌 르세라핌입니다.
르세라핌 멤버는 5명 입니다.
```
**주의 해야할 점**
<br>
한 클래스에 이름이 같은 메서드가 존재할 수 없기 때문에 부모 클래스나 인터페이스에 이미 존재하는 메서드 명을 입력하면 override 키워드를 생략해도 메서드가 덮어써진다. 하지만 직접 명시하는게 유지보수, 개발 측면에서 유리하다. 

### 인터페이스
상속은 기능을 상속받는 개념이지만 인터페이스는 공통으로 필요한 기능을 정의만 하는 역할을 한다. 다트에는 인터페이스 지정 키워드가 따로 없다. 상속은 단 하나의 클래스만 할 수 있지만 인터페이스는 적용 개수에 제한이 없다. 
```
class HiveGroup implements Idol{
  final String name,
  final int memberCount;

  HiveGroup(
    this.name,
    this.memberCount,
  );

  void sayName(){
    print('저희는 하이브 아이돌 ${this.name}입니다.');
  }

  void sayMemberCount(){
    print('${this.name} 멤버는 ${this.memberCount}명 입니다.');
  }
}

void main(){
  HiveGroup lesserafim = HiveGroup('르세라핌', 5);
  lesserafim.sayName();
  lesserafim.sayMemberCount();

}
```
```
Output
저희는 하이브 아이돌 르세라핌입니다.
르세라핌 멤버는 5명입니다.
```
**중요한 점**
<br>
상속과 인터페이스의 다른 점은 다음과 같다. 상속은 부모 클래스의 모든 기능이 상속되므로 재정의할 필요가 없다. 하지만 인터페이스는 반드시 모든 기능을 재정의해줘야 한다. 

### 믹스인
믹스인은 특정 클래스에 원하는 기능들만 골라넣을 수 있는 기능이다. 특정 클래스를 지정해서 속성들을 지정할 수 있으며 지정한 클래스를 상속하는 클래스에서도 사용 가능하다. 또한 인터페이스처럼 한 개의 클래스에 여러 개의 믹스인을 사용할 수 있다. 
```
mixin IdolSingMixin on Idol{
  void sing(){
    print('${this.name}가 노래를 부릅니다.');
  }
}

// 믹스인을 적용할 때는 with 키워드 사용
class SmGroup extends Idol with IdolSingMixin{
  SmGroup(
    super.name,
    super.memberCount,
  );

  void sayCompany(){
    print('저는 sm 소속입니다.');
  }
}
void main(){
  SmGroup aespa = SmGroup('에스파', 4);

  // 믹스인에 정의된 sing()함수 사용
  aespa.sing();
}
```
```
Output
에스파가 노래를 부릅니다.
```

### 추상
추상은 상속이나 인터페이스로 사용하는 데 필요한 속성만 정의하고 인스턴스화할 수 없도록 하는 기능이다. 인터페이스 예제와 같이 Idol 클래스를 인터페이스로 사용하고 Idol 클래스를 따로 인스턴스화할 일이 없다면, Idol 클래스를 추상 클래스로 선언해서 idol 클래스의 인스턴스화를 방지하고 메서드 정의를 자식 클래스에 위임할 수 있다. 또한 추상 클래스는 추상 메서드를 선언할 수 있으며 추상 메서드는 함수의 반환 타입, 이름, 매개변수만 정의하도록 강제한다.

**Idol 추상 클래스 작성**
```
abstract class Idol{
  final String name;
  final int membersCount;

  Idol(this.name, this.memberCount);

  // 추상 메서드 선언
  void sayName();
  void sayMemberCount();
}
```
**추상 클래스를 구현하는 클래스**
```
// 생성자와 모든 메서드 정의 <하나라도 정의하지 않으면 에러남 주의>
class SmGroup implements Idol{
  final String name;
  final int membersCount;

  SmGroup(
    this.name,
    this.memberCount,
  );

  void sayName(){
    print('저희는 sm아이돌 ${this.name}입니다.');
  }

  void sayMemberCount(){
    print('${this.name} 멤버는 ${this.memberCount}명 입니다.');
  }
}

void main(){
  SmGroup aespa = SmGroup('에스파', 4);

  aespa.sayName();
  aespa.sayMemberCount();
}
```
```
Output
저희는 sm 아이돌 에스파입니다.
에스파 멤버는 4명입니다.
```

### 제네릭
제네릭은 클래스나 함수의 정의를 선언할 때가 아니라 인스턴스화 하거나 실행할 때로 미루는 역할은 한다. 특정 변수의 탕비을 하나의 타입으로 제한하고 싶지 않을 때 자주 사용한다. **예를 들어 정수를 받는 함수, 문자열을 받는 함수를 각각 setInt(), setString() 이렇게 받지 않아도 제네릭을 사용해 set() 함수 하나로 여러 자료형을 입력받게 처리 가능하다.**
```
// 인스턴스화할 때 입력받르 타입을 T 문자로 지정
class Cache<T> {
  final T data;

  Cache({
    required this.data,
  });
}

void main() {
  // T 타입을 List<int>로 입력
  final cache = Cache<List<int>>(
    data: [1,2,3],
  )
}

// 제네릭에 입력된 값을 통해 data 변수의 타입이 자동으로 유추
print(cache.dta.reduce((value, element)+> value + element));
```
#### 일반적으로 개발자들이 제너릭 타입을 표현하는 문자
|문자|설명|예시|
|:---:|:---:|:---:|
|T|변수 타입을 표현|T value;|
|E|리스트 내부 요소들의 타입을 표현| List<E>|
|K|키를 표현할 때|Map<K, V>|
|V|값을 표현할 때|Map<K, V>|

### 스태틱
지금까지 작성한 변수와 메서드 등 모든 속성은 각 **'클래스의 인스턴스'에 귀속** 되었다. 하지만 static 키워드를 사용하면 **클래스 자체에 귀속**된다.  
```
class Counter{
  // 스테틱 키워드로 스테틱 변수 선언
  // 정적 변수 이며 Counter클래스에 귀속 되기 때문에 인스턴스를 호출할 때마다 1씩 증가
  static int i= 0;

  // 생성자를 i로 명시하며 스테틱 변수는 클래스에 직접 귀속되기 때문에 생성자에서 스테틱 값을 지정하지 못함
  Counter(){
    i++;
    print(i++);
  }
}

void main(){
  Counter count1 = Counter();
  Counter count2 = Counter();
  Counter count3 = Counter();
}
```
```
Output
1
2
3
```

### 캐스케이드 연산자
케스케이드 연산자는 인스턴스에서 해당 인스턴스의 속성이나 멤버 함수를 연속해서 사용하는 기능이다. 케스케이드 연산자는 .. 기호를 사용한다.

```
class Idol{
  final String name;
  final int memberCount;

  Idol(this.name, this.memberCount);

  void sayName(){
    print('저희는 ${this.name}입니다.');
  }

  void sayMemberCount(){
    print('${this.name} 멤버는 ${this.memberCount}명 입니다.');
  }
}

void main() {
  // 캐스케이드 연산자(...)를 사용하면 
  // 선언한 변수의 메서드를 연속으로 실행할 수 있음
  Idol aespa = Idol('에스파', 4);
    ..sayName()
    ..sayMemberCount();
}
```
```
Output
저희는 에스파입니다.
에스파 멤버는 4명입니다. 
```

##핵심 요약
1. Class 키워드를 사용해 클래스를 선언할 수 있다.
2. 클래스를 인스턴스화 하면 클래스의 인스턴스를 변수로 저장할 수 있다.
3. 상속받으면 부모 클래스의 모든 속성을 물려받는다. 
  * extends 키워드로 상속받을 수 있다.
  * 하나의 자식 클래스는 하나의 부모 클래스만 상속받을 수 있다.
4. 오버라이드는 이미 선언되어 있는 속성을 덮어쓰는 기능이다.
5. 인터페이스는 클래스의 필수 속성들을 정의하고 강제할 수 있는 기능이다.
  * implements 키워드로 인터페이스를 적용한다.
  * 하나의 클래스에 여러 개의 인터페이스를 적용 가능하다. 
6. 믹스인은 상속처럼 모든 속성을 물려받지 않고 원하는 기능만 골라서 적용할 수 있다.
  * with 키워드를 사용해서 믹스인을 적용한다. 
  * 하나의 클래스에 여러개의 믹스인을 적용할 수 있다. 
7. 제네릭은 변수 타입의 정의를 인스턴스화까지 미룰 수 있다. <>를 사용해서 제네릭을 선언할 수 있다. 
8. 스태틱은 클래스에 직접 귀속되는 속성이며 static 키워드로 선언한다. 
9. 케스케이드 연산자는 인스턴스에서 해당 인스턴스의 속성이나 멤버 함수를 연속해서 호출할 때 사용한다. 

