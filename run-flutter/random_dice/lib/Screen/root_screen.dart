import 'package:flutter/material.dart';
import 'package:random_dice/Screen/home_screen.dart';
import 'package:random_dice/Screen/settings_screen.dart';
import 'dart:math';
import 'package:shake/shake.dart';

class RootScreen extends StatefulWidget {
  const RootScreen({Key? key}) : super(key: key);

  @override
  State<RootScreen> createState() => _RootScreenState();
}

//  TabController와 vsync 기능을 사용하려면 필수로 TickerProviderStateMixin를 사용해야 함
class _RootScreenState extends State<RootScreen> with TickerProviderStateMixin {
  TabController? controller; // 컨트롤러 선언
  double threshold = 2.7; // 민감도 기본값 설정
  int number = 1; // 주사위 숫자
  ShakeDetector? shakeDetector;

  @override
  void initState() {
    super.initState();

    controller = TabController(length: 2, vsync: this); // 컨트롤러 초기화
    controller!.addListener(tabListener);

    shakeDetector = ShakeDetector.autoStart( // 흔들기 감지 시작
      onPhoneShake: onPhoneShake, // 감지 후 실행할 함수
      shakeSlopTimeMS: 100, // 감지 주기
      shakeThresholdGravity: threshold, // 감지 민감도
    );
  }

  void onPhoneShake(){
    final rand = new Random();

    setState(() {
      number = rand.nextInt(5) + 1;
    });
  }

  //리스너 함수 정의
  tabListener() {
    setState(() {});
  }

  @override
  void dispose() {
    // 리스너에 등록한 함수 등록 취소
    controller!.removeListener(tabListener);
    shakeDetector!.stopListening();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: TabBarView(
        controller: controller,
        children: renderChildren(),
      ),

      //아래 네비게이션 탭을 구현하는 매개변수
      bottomNavigationBar: renderBottomNavigation(),
    );
  }

  List<Widget> renderChildren() {
    return [
      // 스크린을 불러옴
      HomeScreen(number: number),
      SettingsScreen(
        threshold: threshold,
        onThresholdChange: onTresholdchange,
      ),
    ];
  }

  // 슬라이더 변경시 실행함수
  void onTresholdchange(double val) {
    setState(() {
      threshold = val;
    });
  }

  BottomNavigationBar renderBottomNavigation() {
    return BottomNavigationBar(
      currentIndex: controller!.index, // 현재 화면에 렌더링되는 인덱스
      onTap: (int index) {
        // 탭이 선택될 때마다 실행되는 함수
        setState(() {
          controller!.animateTo(index);
        });
      },
      // 네비게이션 구현 위젯
      items: [
        // 아이콘 매개변수들을 정의
        BottomNavigationBarItem(
            icon: Icon(Icons.edgesensor_high_outlined), label: '주사위'),
        BottomNavigationBarItem(
            icon: Icon(
              Icons.settings,
            ),
            label: '설정'),
      ],
    );
  }
}
