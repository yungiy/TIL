import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class HomeScreen extends StatelessWidget {
  WebViewController? controller; // 컨트롤러 변수 생성

  HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // 앱바 위젯 추가
      appBar: AppBar(
        backgroundColor: Colors.lightGreenAccent,
        title: Text('Yungiy'),
        centerTitle: true,
        //앱 바에 액션함수 추가'
        actions: [
          IconButton(
            // 눌렀을 때 콜백 함수
            onPressed: () {
              if (controller != null) {
                controller!.loadUrl('https://blog.codefactory.ai');
              }
            },
            icon: Icon(
              Icons.home,
            ),
          ),
        ],
      ),
      body: WebView(
        // 웹 뷰 생성 함수
        onWebViewCreated: (WebViewController controller) {
          this.controller = controller;
        },
        initialUrl: 'https://blog.codefactory.ai',
        javascriptMode: JavascriptMode.unrestricted,
      ),
    );
  }
}
