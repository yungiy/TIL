/* 디비 관련 sql문 정의등 */
import 'dart:io';

import 'package:calendar/model/schedule.dart';
import 'package:drift/drift.dart';
import 'package:drift/native.dart';
import 'package:path/path.dart' as p;
import 'package:path_provider/path_provider.dart';

//private 값 불러옴
part 'drift_database.g.dart'; // part 파일 지정

@DriftDatabase(
  tables: [
    Schedules,
  ],
)
class LocalDatabase extends _$LocalDatabase {
  LocalDatabase() : super(_openConnection());

  // 데이터 조회
  Stream<List<Schedule>> watchSchedules(DateTime date) =>
      (select(schedules)..where((tbl) => tbl.date.equals(date))).watch();

  // 데이터 생성
  Future<int> createSchedule(SchedulesCompanion data) =>
      into(schedules).insert(data);

  // 데이터 삭제
  Future<int> removeSchedule(int id) =>
      (delete(schedules)..where((tbl) => tbl.id.equals(id))).go();

  // 필수로 지정해야함
  // 기본적으로 1부터 시작하고 테이블의 변화가 있을 때
  // 1씩 올려 테이블의 구조가 변경된다는 것을 인지시켜주는 기능
  @override
  int get schemaVersion => 1;
}

LazyDatabase _openConnection() {
  return LazyDatabase(() async {
    // 디비파일 저장할 폴더
    final dbFolder = await getApplicationDocumentsDirectory();
    final file = File(p.join(dbFolder.path, 'db.sqlite'));
    return NativeDatabase(file);
  });
}
