import 'package:flutter/material.dart';
/*
void main() {
  runApp(MyApp());
}
*/

/*
  GestureDetector 위젯에서 제공하는 제스처 매개변수
  onTap
  onDoubleTap
  onLongTap
  onPanTap
  onPanStart
  onPanEnd
  onHorizontalDragStart
  onHorizontalDragUpdate
  onHorizontalDragEnd
  onVerticalDragStart
  onVerticalDragUpdate
  onVerticalDragEnd
  onScaleStart
  onScaleUpdate
  onScaleEnd
*/

//텍스트 관련 위젯
/*
class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: Text(
            'Hello Yang',
            // 글자에 대한 스타일링
            style: TextStyle(
              fontSize: 16.0,
              fontWeight: FontWeight.w700,
              color:  Colors.blue,
            )
          )
        ),
      ),
    );
  }
}
*/

// 텍스트만 있는 버튼
/*
class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: TextButton(
              //클릭 시 실행
              onPressed: (){},
              style: TextButton.styleFrom(
                foregroundColor: Colors.orange,
              ),
            child: Text('텍스트 버튼'),
            ),
        ),
      ),
    );
  }
}
*/

// 테두리가 있는 버튼
/*
class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: OutlinedButton(
            //클릭 시 실행
            onPressed: (){},
            style: OutlinedButton.styleFrom(
              foregroundColor: Colors.orange,
            ),
            child: Text('아웃라인 있는 버튼'),
          ),
        ),
      ),
    );
  }
}

*/


// 입체적인 버튼
/*
class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: ElevatedButton(
            //클릭 시 실행
            onPressed: (){},
            style: ElevatedButton.styleFrom(
              foregroundColor: Colors.orange,
            ),
            child: Text('입체 버튼'),
          ),
        ),
      ),
    );
  }
}
*/

// 아이콘 버튼
/*
class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: IconButton(
            //클릭 시 실행
            onPressed: (){},
            icon: Icon(
              Icons.home
            ),
          ),
        ),
      ),
    );
  }
}
*/

// 손가락 제스처 인지 GestureDetector 위젯
/*
class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: GestureDetector(
            //한 번 탭 했을 때 실행할 함수
            onTap: (){
              // 콘솔에 찍음
              print("한 번 누름");
            },
            onDoubleTap: (){
              //손가락 두번 탭
              print("더블 탭");
            },
            onLongPress: (){
              print("꾹 누름");
            },
            // 제스처를 적용할 위젯
            child: Container(
              decoration: BoxDecoration(
                color: Colors.red,
              ),
              width: 100.0,
              height: 100.0,
            )
          )
        ),
      ),
    );
  }
}
*/

//Floating Button
/*
void main(){
  runApp(FloatingActionButtonExample());
}
class FloatingActionButtonExample extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return MaterialApp(
      home: Scaffold(
        floatingActionButton: FloatingActionButton (
        onPressed: (){},
        child: Text('클릭'),
        ),
        body: Container(),
      )
    );
  }
}
*/


/* 디자인 관련 위젯 */

// 컨테이너 위젯 다른 위젯을 담는데 사용 위젯의 넒이와 높이를 지정 배경이나 테두리를 추가할 때 사용
/*
void main(){
  runApp(ContainerExample());
}
class ContainerExample extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return MaterialApp(
        home: Scaffold(
          body: Container(
            //스타일 적용
            decoration: BoxDecoration(
                color: Colors.red,
                border: Border.all(
                  width: 30.0,
                  color: Colors.black,
                ),
              borderRadius: BorderRadius.circular(30.0),
            ),
            width: 100.0,
            height: 200.0,
          ),
        )
    );
  }
}
*/

// sizedBox 위젯 일반적으로 일정 크기의 공간을 공백으로 두고 싶을 때 사용
// Container 위젯보다 퍼포먼스적인 부분에서 우위
/*
void main(){
  runApp(SizedBoxExample());
}
class SizedBoxExample extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return MaterialApp(
        home: Scaffold(
          body: SizedBox(
            height: 200.0,
            width: 200.0,
            //sizedbox는 색상이 없어 크기를 확인하는 용도로 박스 추가
            child: Container(
              color: Colors.red,
            ),
          )
        )
    );
  }
}
*/

// 패딩 위젯 매개변수로 EdgeInsets 사용 필수, 플러터에서는 margin < padding
/*
void main(){
  runApp(PaddingExample());
}
class PaddingExample extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return MaterialApp(
        home: Scaffold(
            body: Container(
              color:  Colors.blue,
              child: Padding(
                //상하좌우 모두 16픽셀 적용
                padding: EdgeInsets.all(16.0),
                child: Container(
                  color: Colors.red,
                  width: 50.0,
                  height: 50.0,
                ),
              ),
            )
        )
    );
  }
}
*/

// SafeArea 아이폰의 노치디자인이나 디자인으로 위젯을 가릴 때 SafeArea를 사용하면 예외처리를 안해도 됨
/*
void main(){
  runApp(SafeAreaExample());
}
class SafeAreaExample extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return MaterialApp(
        home: Scaffold(
            body: SafeArea(
              //원하는 곳에만 적용 가능
              // true에는 적용 false에는 미적용
              top: true,
              bottom: true,
              left: true,
              right: true,
              child: Container(
                color: Colors.red,
                height: 300.0,
                width: 300.0,
              )
            )
        )
    );
  }
}
*/

/* 배치 디자인 Row */
// Row(가로), Column(세로)를 기준으로 주축(main axis) 반대축(cross axis)가 존재
/*
void main(){
  runApp(RowWidgetExample());
}
class RowWidgetExample extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return MaterialApp(
      home: Scaffold(
        body: SizedBox(
          // 반대축에서 이동할 공간을 제공하기 위해 높이 최대로 설정
          height: double.infinity,
          child: Row(

            //주축 정렬
            mainAxisAlignment: MainAxisAlignment.center,
            //반대축 정렬 지정
            crossAxisAlignment: CrossAxisAlignment.center,

            // 넣고 싶은 위젯 입력
            children: [
              Container(
                height: 50.0,
                width: 50.0,
                color: Colors.red,
              ),

              //SziedBox는 공백을 만들 때 사용
              const SizedBox(width: 12.0),
              Container(
                height: 50.0,
                width: 50.0,
                color: Colors.lightGreen,
              ),
              const SizedBox(width: 12.0),
              Container(
                height: 50.0,
                width: 50.0,
                color: Colors.deepPurple,
              ),
            ],
          ),
        ),
      )
    );
  }
}
*/

/* 배치 디자인 column */
// 이하 동일
/*
void main(){
  runApp(ColumnWidgetExample());
}
class ColumnWidgetExample extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return MaterialApp(
        home: Scaffold(
          body: SizedBox(

            // 반대축에서 이동할 공간을 제공하기 위해 높이 최대로 설정
            height: double.infinity,
            child: Column(

              //주축 정렬
              mainAxisAlignment: MainAxisAlignment.center,
              //반대축 정렬 지정
              crossAxisAlignment: CrossAxisAlignment.center,

              // 넣고 싶은 위젯 입력
              children: [
                Container(
                  height: 50.0,
                  width: 50.0,
                  color: Colors.red,
                ),

                //SziedBox는 공백을 만들 때 사용
                const SizedBox(width: 12.0),
                Container(
                  height: 50.0,
                  width: 50.0,
                  color: Colors.lightGreen,
                ),
                const SizedBox(width: 12.0),
                Container(
                  height: 50.0,
                  width: 50.0,
                  color: Colors.deepPurple,
                ),
              ],
            ),
          ),
        )
    );
  }
*/

// flexible 위젯
// 플렉시블 위젯을 컬럼 위젯과 로우 위젯에서 사용하면 flexible에 제공된 child가 크기를 최소한으로 차지하게 할 수 있음
/*
void main(){
  runApp(FlexWidgetExample());
}
class FlexWidgetExample extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return MaterialApp(
        home: Scaffold(
          body: SizedBox(

            // 반대축에서 이동할 공간을 제공하기 위해 높이 최대로 설정
            height: double.infinity,
            child: Column(
              children: [
                Flexible(
                  // flex는 남는 공간을 차지할 비율을 의미
                  // flex값을 제공하지 않으면 기본값은 1
                  flex: 1,
                  child: Container(
                    color: Colors.red,
                  ),
                ),
                Flexible(
                // flex는 남는 공간을 차지할 비율을 의미
                // flex값을 제공하지 않으면 기본값은 1
                flex: 1,

                  child: Container(
                  color: Colors.blue,
                  ),
                )
              ],
            ),
          ),
        )
    );
  }
*/

// Expanded 위젯
// Flexible 위젯을 상속하며 column과 row에서 사용하면 위젯이 남아있는 공간을 최대한으로 차지

void main() {
  runApp(ExpandedWidgetExample());
}

class ExpandedWidgetExample extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: Scaffold(
          body: SizedBox(
            // 반대축에서 이동할 공간을 제공하기 위해 높이 최대로 설정
            height: double.infinity,
            child: Column(
              children: [
                Expanded(
                  child: Container(
                    color: Colors.red,
                  ),
                ),
                Expanded(
                  child: Container(
                    color: Colors.blue,
                  ),
                )
              ],
            ),
          ),
        )
    );
}







