/*
  콜백 함수 - 일정 작업이 완료되면 실행되는 함수
  WebView(
    initialURL: 'https://blog.codefactory.ai',
    javascriptMode: JavascriptMode.unrestricted,

    onPageFinished: (string url){
      print(url);
    }
  )
*/
import 'package:flutter/material.dart';
// import 'package:[플러그인 이름/[플러그인 이름].dart'
import 'package:blog_web_app/screen/home_screen.dart';

void main() {
  runApp(MaterialApp(
    home: HomeScreen(),
  ));
}
