import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:insta/src/app.dart';
import 'package:insta/src/binding/init_binding.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
          primarySwatch: Colors.blue,
          appBarTheme: const AppBarTheme(
            backgroundColor: Colors.white,
            titleTextStyle: TextStyle(color: Colors.black),
          )),
      initialBinding: InitBinding(),
      home: const App(),
    );
  }
}
