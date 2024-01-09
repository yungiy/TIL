import 'package:calendar/screen/home_screen.dart';
import 'package:flutter/material.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'package:calendar/database/drift_database.dart';
import 'package:get_it/get_it.dart';

void main() async {
  await initializeDateFormatting('ko_KR', null);

  // 데이터베이스 생성
  final database = LocalDatabase();
  // 데이터베이스 변수 주입
  GetIt.I.registerSingleton<LocalDatabase>(database);

  runApp(MaterialApp(
    home: HomeScreen(),
  ));
}
