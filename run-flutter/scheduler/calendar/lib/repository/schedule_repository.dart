/* api 요청 기능 구 GET, POST, DELETE,  */
import 'dart:async';
import 'dart:io';

import 'package:calendar/model/schedule_model.dart';
import 'package:dio/dio.dart';

class ScheduleRepository {
  final _dio = Dio();

  //안드로이드에서는 localhost가 10.0.2.2임
  final _targetUrl =
      'http://${Platform.isAndroid ? '10.0.2.2' : 'localhost'}:3000/schedule';

  Future<List<ScheduleModel>> getSchedule({
    required DateTime date,
  }) async {
    // 쿼리 매개변수 : queryParameters
    final resp = await _dio.get(_targetUrl, queryParameters: {
      'date':
          '${date.year}${date.month.toString().padLeft(2, '0')}${date.day.toString().padLeft(2, '0')}',
    });

    // 모델 인스턴스로 매핑
    return resp.data
        .map<ScheduleModel>(
          (x) => ScheduleModel.fromJson(json: x),
        )
        .toList();
  }

  // ScheduleModel 타입을 매개변수로 받는다는 가정하에 createSchedule() 함수를 작성
  Future<String> createSchedule({
    required ScheduleModel schedule,
  }) async {
    // Json으로 변환, http 요청의 body는 꼭 Json으로 변환되는 Map 형태로 입력해줘야 함
    final json = schedule.toJson();
    final resp = await _dio.post(_targetUrl, data: json);
    return resp.data?['id'];
  }

  // 일정을 삭제하는 api로 body에 삭제할 일정의 id값을 받는 형식으로 삭제함
  Future<String> deleteSchedule({
    required String id,
  }) async {
    final resp = await _dio.delete(_targetUrl, data: {
      'id': id, //삭제할 id값
    });
    return resp.data?['id']; // 삭제된 id값 반환
  }
}
