import 'package:calendar/component/main_calendar.dart';
import 'package:calendar/component/schedule_bottom_sheet.dart';
import 'package:calendar/component/schedule_card.dart';
import 'package:calendar/component/today_banner.dart';
import 'package:calendar/const/colors.dart';
import 'package:calendar/provider/schedule_provider.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class HomeScreen extends StatelessWidget {
  DateTime selectedDate = DateTime.utc(
    DateTime.now().year,
    DateTime.now().month,
    DateTime.now().day,
  );

  @override
  Widget build(BuildContext context) {
    // 프로바이더 변경이 있을 때마다 build() 함수 재설정
    final provider = context.watch<ScheduleProvider>();

    // 선택된 날짜 가져오기
    final selectedDate = provider.selectedDate;

    // 선택된 날짜에 해다외는 일정들 가져오기
    final schedules = provider.cache[selectedDate] ?? [];

    return Scaffold(
      floatingActionButton: FloatingActionButton(
        backgroundColor: PRIMARY_COLOR,
        onPressed: () {
          // 바텀 시트 열기
          showModalBottomSheet(
            context: context,
            // 배경 탭하면 바텀시트 닫기
            isDismissible: true,
            builder: (_) => ScheduleBottomSheet(
              // 선택된 날짜 넘겨주기
              selectedDate: selectedDate,
            ),
            // 바텀시트의 높이를 화면의 최대 높이로 정의
            isScrollControlled: true,
          );
        },
        child: Icon(
          Icons.add,
        ),
      ),
      body: SafeArea(
        child: Column(
          children: [
            MainCalendar(
              selectedDate: selectedDate, // 선택된 날짜 전달하기
              onDaySelected: onDaySelected, // 날짜가 선택됐을 때
            ),
            SizedBox(height: 8.0),
            TodayBanner(
              selectedDate: selectedDate,
              count: schedules.length,
            ),
            SizedBox(height: 8.0),
            Expanded(
              child: ListView.builder(
                  itemCount: schedules.length,
                  itemBuilder: (context, index) {
                    final schedule = schedules[index];

                    return Dismissible(
                      key: ObjectKey(schedule.id),
                      direction: DismissDirection.endToStart,
                      onDismissed: (DismissDirection direction) {
                        provider.deleteSchedule(
                            date: selectedDate, id: schedule.id);
                      },
                      child: Padding(
                        padding: const EdgeInsets.only(
                            bottom: 8.0, left: 8.0, right: 8.0),
                        child: ScheduleCard(
                          startTime: schedule.startTime,
                          endTime: schedule.endTime,
                          content: schedule.content,
                        ),
                      ),
                    );
                  }),
            ),
          ],
        ),
      ),
    );
  }

  void onDaySelected(DateTime selectedDate, DateTime focusedDate) {}
}
