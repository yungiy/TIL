import 'package:calendar/screen/home_screen.dart';
import 'package:flutter/material.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'package:calendar/database/drift_database.dart';
import 'package:get_it/get_it.dart';

// provider 설정 패키지
import 'package:calendar/provider/schedule_provider.dart';
import 'package:calendar/repository/schedule_repository.dart';
import 'package:provider/provider.dart';

void main() async {
  await initializeDateFormatting();

  // 데이터베이스 생성
  final database = LocalDatabase();
  // 데이터베이스 변수 주입
  GetIt.I.registerSingleton<LocalDatabase>(database);

  final repository = ScheduleRepository();
  final scheduleProvider = ScheduleProvider(repository: repository);

  runApp( //프로바이더로 하위 위젯들에 제공
    ChangeNotifierProvider(
        create: (_) => scheduleProvider,
      child: MaterialApp(
        home: HomeScreen(),
      ),
    ),
  );
}
