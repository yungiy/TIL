import 'package:calendar/component/main_calendar.dart';
import 'package:calendar/component/schedule_bottom_sheet.dart';
import 'package:calendar/component/schedule_card.dart';
import 'package:calendar/component/today_banner.dart';
import 'package:calendar/const/colors.dart';
import 'package:calendar/database/drift_database.dart';
import 'package:flutter/material.dart';
import 'package:get_it/get_it.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  DateTime selectedDate = DateTime.utc(
    DateTime.now().year,
    DateTime.now().month,
    DateTime.now().day,
  );

  @override
  Widget build(BuildContext context) {
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
            StreamBuilder<List<Schedule>>( // 일정 스트림으로 받기
                stream: GetIt.I<LocalDatabase>().watchSchedules(selectedDate),
                builder: (context, snapshot) {
                  return TodayBanner(
                      selectedDate: selectedDate,
                      count: snapshot.data?.length ?? 0, // 일정 갯수 입력
                  );
                }
            ),
            SizedBox(height: 8.0),
            Expanded(
              // 남는 공간 모두 차지
              // 일정 정보가 스트림으로 제공되기 때문에 스트림 빌더 사용
              child: StreamBuilder<List<Schedule>>(
                stream: GetIt.I<LocalDatabase>().watchSchedules(selectedDate),
                builder: (context, snapshot) {
                  if (!snapshot.hasData) {
                    // 데이터가 없을 때
                    return Container();
                  }
                  // 화면에 보이는 값들만 렌더링하는 리스트
                  return ListView.builder(
                    //리스트에 입력할 값들의 총 개수
                    itemCount: snapshot.data!.length,
                    itemBuilder: (context, index) {
                      // 현재 인덱스에 해당되는 일정
                      final schedule = snapshot.data![index];
                      return Dismissible(
                        key: ObjectKey(schedule.id), // 키 값 설정
                        direction: DismissDirection.endToStart, // 밀기방향
                        // 밀었을 때 실행할 함수
                        onDismissed: (DismissDirection direction) {
                          GetIt.I<LocalDatabase>().removeSchedule(schedule.id);
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
                    },
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }

  void onDaySelected(DateTime selectedDate, DateTime focusedDate) {
    setState(() {
      this.selectedDate = selectedDate;
    });
  }
}
