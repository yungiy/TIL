import 'dart:async'; // async 패키지 불러오기

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

// StateFulWidget : 상태 유지 위젯
class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final PageController pageController = PageController();

  @override
  void initState() {
    super.initState();
    Timer.periodic(Duration(seconds: 3), (timer) {
      // 현재 페이지 가져오기
      int? nextPage = pageController.page?.toInt();
      if (nextPage == null) {
        return;
      }
      if (nextPage == 4) {
        nextPage = 0;
      } else {
        nextPage++;
      }
      pageController.animateToPage(
        nextPage,
        duration: Duration(milliseconds: 500),
        curve: Curves.ease,
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    // 상태바 색상변경
    SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle.light);
    return Scaffold(
        body: PageView(
      controller: pageController,
      // 샘플리스트 생성
      children: [1, 2, 3, 4, 5]
          .map(
            // 정렬
            (number) => Image.asset(
              'asset/img/image$number.jpg',
              fit: BoxFit.cover,
            ),
          )
          .toList(),
    ));
  }
}
