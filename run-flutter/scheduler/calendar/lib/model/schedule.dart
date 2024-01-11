import 'package:drift/drift.dart';

class Schedules extends Table {
  IntColumn get id => integer().autoIncrement()(); //PK
  TextColumn get content => text()(); // 내용
  DateTimeColumn get date => dateTime()(); // 일정날짜
  IntColumn get startTime => integer()(); // 시작 시간
  IntColumn get endTime => integer()(); // 종료시간
}