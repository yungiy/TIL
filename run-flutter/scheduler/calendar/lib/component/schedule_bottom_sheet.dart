/* 스케쥴 아래 시트 */
import 'package:calendar/component/custom_text_field.dart';
import 'package:calendar/const/colors.dart';
import 'package:calendar/database/drift_database.dart';
import 'package:calendar/model/schedule_model.dart';

// 파이어베이스 설정
import 'package:uuid/uuid.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class ScheduleBottomSheet extends StatefulWidget {
  final DateTime selectedDate; // 선택된 날짜 상위 위젯에서 입력 받기

  const ScheduleBottomSheet({
    Key? key,
    required this.selectedDate,
  }) : super(key: key);

  @override
  State<ScheduleBottomSheet> createState() => _ScheduleBottomSheetState();
}

class _ScheduleBottomSheetState extends State<ScheduleBottomSheet> {
  final GlobalKey<FormState> formKey = GlobalKey();

  int? startTime;
  int? endTime;
  String? content;

  @override
  Widget build(BuildContext context) {
    final bottomInset = MediaQuery.of(context).viewInsets.bottom;

    return Form(
      key: formKey,
      child: SafeArea(
        child: Container(
          height: MediaQuery.of(context).size.height / 2 +
              bottomInset, // 화면 반 높이에 키보드 높이 추가하기
          color: Colors.white,
          child: Padding(
            padding:
                EdgeInsets.only(left: 8, right: 8, top: 8, bottom: bottomInset),
            child: Column(
              // 시간 관련 텍스트 필드와 내용관련 텍스트 필드 세로로 배치
              children: [
                Row(
                  // 시작 시간 종료 시간 가로로 배치
                  children: [
                    Expanded(
                      child: CustomTextField(
                        // 시작시간 입력 필드
                        label: '시작 시간',
                        isTime: true,
                        // 저장이 실행되면 startTime 변수에 텍스트값 필드 저장
                        onSaved: (String? val) {
                          startTime = int.parse(val!);
                        },
                        vaildator: timeValidator,
                      ),
                    ),
                    const SizedBox(width: 16.0),
                    Expanded(
                      child: CustomTextField(
                        // 종료시간 입력 필드
                        label: '종료 시간',
                        isTime: true,
                        onSaved: (String? val) {
                          endTime = int.parse(val!);
                        },
                        vaildator: timeValidator,
                      ),
                    ),
                  ],
                ),
                SizedBox(height: 8.0),
                Expanded(
                  child: CustomTextField(
                    // 내용 입력 필드
                    label: '내용',
                    isTime: false,
                    onSaved: (String? val) {
                      content = val;
                    },
                    vaildator: contentValidator,
                  ),
                ),
                SizedBox(
                  width: double.infinity,
                  child: ElevatedButton(
                    onPressed: () => onSavedPressed(context),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: PRIMARY_COLOR,
                    ),
                    child: Text(
                      '저장',
                      style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.w700,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  // 저장 함수
  void onSavedPressed(BuildContext context) async {
    // 폼 검증하기
    if (formKey.currentState!.validate()) {
      // 폼 저장하기
      formKey.currentState!.save();

      // 스케줄 모델 생성 및 파이어 스토어 삽입
      final schedule = ScheduleModel(
        id: Uuid().v4(),
        content: content!,
        date: widget.selectedDate,
        startTime: startTime!,
        endTime: endTime!,
      );

      await FirebaseFirestore.instance
          .collection('schedule')
          .doc(schedule.id)
          .set(schedule.toJson());

      Navigator.of(context).pop(); // 일정 생성 후 종료
    }
  }

  // 시간값 검증
  // 값이 입력안됐거나 숫자가 입력 안됐거나 0과 24사이의 값이 아니라면 해당 값 반환
  String? timeValidator(String? val) {
    if (val == null) {
      return '값을 입력해주세요';
    }

    int? number;

    try {
      number = int.parse(val);
    } catch (e) {
      return '숫자를 입력해주세요.';
    }

    if (number < 0 || number > 24) {
      return '0시부터 24시 사이를 입력해주세요';
    }

    return null;
  }

  // 내용값 검증
  // 일정 내용을 검증하는 함수로 null이 입력되거나 글자길이가 0이면 에러메세지 반환
  String? contentValidator(String? val) {
    if (val == null || val.length == 0) {
      return '값을 입력해주세요.';
    }
    return null;
  }
}
