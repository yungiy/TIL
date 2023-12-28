import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // 상태바 색상변경
    SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle.light);
    return Scaffold(
        body: PageView(
      // 샘플리스트 생성
      children: [1, 2, 3, 4, 5]
          .map(
            // 정렬
            (number) => Image.asset(
              'assets/img/image$number.jpg',
              fit: BoxFit.cover,
            ),
          )
          .toList(),
    ));
  }
}
