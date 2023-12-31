import 'package:flutter/material.dart';
import 'package:random_dice/Screen/root_screen.dart';
import 'package:random_dice/const/colors.dart';

void main() {
  runApp(
    MaterialApp(
      theme: ThemeData(
          scaffoldBackgroundColor: backgroundColor,
          sliderTheme: SliderThemeData(
            // 슬라이더 위젯 관련 테마
            thumbColor: primaryColor, // 노브 색상
            activeTrackColor: primaryColor, // 노브가 이동한 트랙 색상
            //노브가 아직 이동하지 않았을 때 트랙 색상
            inactiveTrackColor: primaryColor.withOpacity(0.3),
          ),
          bottomNavigationBarTheme: BottomNavigationBarThemeData(
            selectedItemColor: primaryColor,
            unselectedItemColor: secondaryColor,
            backgroundColor: backgroundColor,
          )),
      home: RootScreen(),
    ),
  );
}
