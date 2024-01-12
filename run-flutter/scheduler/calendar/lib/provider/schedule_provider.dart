import 'package:calendar/model/schedule_model.dart';
import 'package:calendar/repository/schedule_repository.dart';
import 'package:flutter/material.dart';
import 'package:uuid/uuid.dart';

class ScheduleProvider extends ChangeNotifier {
  final ScheduleRepository repository; //  API 요청 로직을 담은 클래스

  DateTime selectedDate = DateTime.utc(
    // 선택한 날짜
    DateTime.now().year,
    DateTime.now().month,
    DateTime.now().day,
  );
  Map<DateTime, List<ScheduleModel>> cache = {}; // 일정 정보를 저장해둘 변수

  ScheduleProvider({
    required this.repository,
  }) : super() {
    getSchedules(date: selectedDate);
  }

  void getSchedules({
    required DateTime date,
  }) async {
    final resp = await repository.getSchedules(date: date); // GET 메서드 보내기

    cache.update(date, (value) => resp,
        ifAbsent: () => resp); // 선택한 날짜의 일정들 업데이트하기

    notifyListeners(); // Listening 하는 위젯들 업데이트하기
  }

  void createSchedule({
    required ScheduleModel schedule,
  }) async {
    final targetDate = schedule.date;
    final uuid = Uuid();
    final tempId = uuid.v4();
    final newSchedule = schedule.copyWith(
      id: tempId, // 임시 id 저장
    );

    // 긍정적 응답 : 서버에서 응답을 받기 전 캐시를 먼저 업데이트 함
    cache.update(
      targetDate,
      (value) => [
        ...value,
        newSchedule,
      ]..sort(
          (a, b) => a.startTime.compareTo(
            b.startTime,
          ),
        ),
      ifAbsent: () => [newSchedule],
    );
    notifyListeners(); // 캐시 업데이트 반영

    try {
      // api 요청함
      final savedSchedule = await repository.createSchedule(schedule: schedule);
      cache.update(
        targetDate,
        (value) => value
            .map((e) => e.id == tempId
                ? e.copyWith(
                    id: savedSchedule,
                  )
                : e)
            .toList(),
      );
    } catch (e) {
      // 삭제 실패 시 캐시 롤백
      cache.update(
        targetDate,
        (value) => value.where((e) => e.id != tempId).toList(),
      );
    }
    notifyListeners();
  }

  void deleteSchedule({
    required DateTime date,
    required String id,
  }) async {
    final targetSchedule = cache[date]!.firstWhere(
      (e) => e.id == id,
    ); // 삭제할 일정 기억

    // 긍정적 응답
    cache.update(
      date,
      (value) => value.where((e) => e.id != id).toList(),
      ifAbsent: () => [],
    );

    notifyListeners(); // 캐시업데이트 반영하기

    try {
      await repository.deleteSchedule(id: id); // 삭제 함수 실행
    } catch (e) {
      cache.update(
        date,
        (value) => [...value, targetSchedule]..sort(
            (a, b) => a.startTime.compareTo(a.startTime),
          ),
      );
    }
    notifyListeners();
  }

  void changeSelectedDate({
    required DateTime date,
  }) {
    selectedDate = date; // 선택된 날짜를 매개변수로 입력 받은 날짜로 변경
    notifyListeners();
  }
}
