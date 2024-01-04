import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

class HomeScreen extends StatelessWidget {
  static final LatLng namSanLatLng = LatLng(
    37.5512765860031, // 위도
    126.98820233483241 , // 경도
  );
  static final Marker marker = Marker(
    markerId: MarkerId('company'),
    position: namSanLatLng,
  );
  static final Circle circle = Circle(
    circleId: CircleId('choolCheckCircle'),
    center: namSanLatLng,
    fillColor: Colors.orange.withOpacity(0.5),
    radius: 100,
    strokeColor: Colors.orange,
    strokeWidth: 1,
  );

  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: renderAppBar(),
      body: FutureBuilder<String>(
          future: checkPermission(),
          builder: (context, snapshot) {
            if (!snapshot.hasData &&
                snapshot.connectionState == ConnectionState.waiting) {
              return Center(
                child: CircularProgressIndicator(),
              );
            }

            //  권한 허가된 상태
            if (snapshot.data == '위치 권한이 허가 되었습니다.') {
              return Column(
                children: [
                  Expanded(
                    flex: 2,
                    child: GoogleMap(
                      initialCameraPosition: CameraPosition(
                        target: namSanLatLng,
                        zoom: 16,
                      ),
                      myLocationEnabled: true,
                      markers: Set.from([marker]),
                      circles: Set.from([circle]),
                    ),
                  ),
                  Expanded(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(
                          Icons.timelapse_outlined,
                          color: Colors.orange,
                          size: 50.0,
                        ),
                        const SizedBox(height: 20.0),
                        ElevatedButton(

                          onPressed: () async {
                            final curPosition =
                                await Geolocator.getCurrentPosition(); // 현재 위치

                            final distance = Geolocator.distanceBetween(
                              curPosition.latitude, // 현재위치 위도
                              curPosition.longitude, // 현재위치 경도
                              namSanLatLng.latitude, // 회사위치 위도
                              namSanLatLng.longitude, // 회사위치 경도
                            );
                            bool canCheck =
                                distance < 100; // 50미터 이내에 있으면 출근 가능

                            showDialog(
                              context: context,
                              builder: (_) {
                                return AlertDialog(
                                  title: Text('출근하기'),
                                  content: Text(
                                    canCheck ? '출근을 하시겠습니까?' : '출근할 수 없는 위치입니다.',
                                  ),
                                  actions: [
                                    TextButton(
                                      // 취소를 누르면 false 반환
                                      onPressed: () {
                                        Navigator.of(context).pop(false);
                                      },
                                      child: Text('취소'),
                                    ),
                                    if (canCheck) // 출근 가능한 상태일 때만 [출근하기] 버튼 제공
                                      TextButton(
                                        // 출근하기를 누르면 true 반환
                                        onPressed: () {
                                          Navigator.of(context).pop(true);
                                        },
                                        child: Text('출근하기'),
                                      ),
                                  ],
                                );
                              },
                            );
                          },
                          child: Text('출근하기!'),
                        ),
                      ],
                    ),
                  ),
                ],
              );
            }

            // 권한 없을 때
            return Center(
              child: Text(
                snapshot.data.toString(),
              ),
            );
          }),
    );
  }

  // AppBar를 구현하는 함수
  AppBar renderAppBar() {
    return AppBar(
      centerTitle: true,
      title: Text(
        '오늘도 출근',
        style: TextStyle(
          color: Colors.orange,
          fontWeight: FontWeight.w700,
        ),
      ),
      backgroundColor: Colors.white,
    );
  }

  Future<String> checkPermission() async {
    final isLocationEnabled =
        await Geolocator.isLocationServiceEnabled(); // 위치 서비스 활성화여부 확인

    // 위치 서비스 활성화 안 됨
    if (!isLocationEnabled) {
      return '위치 서비스를 활성화해주세요.';
    }

    LocationPermission checkedPermission =
        await Geolocator.checkPermission(); // 위치 권한 확인

    // 위치 권한 거절됨
    if (checkedPermission == LocationPermission.denied) {
      // 위치 권한 요청하기
      checkedPermission = await Geolocator.requestPermission();

      if (checkedPermission == LocationPermission.denied) {
        return '위치 권한을 허가해주세요.';
      }
    }

    // 위치 권한 거절됨
    if (checkedPermission == LocationPermission.deniedForever) {
      return '앱의 위치 권한을 설정에서 허가해주세요.';
    }

    // 위 모든 조건이 통과되면 위치 권한 허가 완료
    return '위치 권한이 허가 되었습니다.';
  }
}
