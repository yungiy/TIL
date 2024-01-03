import 'package:agora_rtc_engine/agora_rtc_engine.dart';
import 'package:flutter/material.dart';
import 'package:permission_handler/permission_handler.dart'; // 권한 가져오기
import 'package:video_call/const/agora.dart';

class CamScreen extends StatefulWidget {
  const CamScreen({Key? key}) : super(key: key);

  @override
  State<CamScreen> createState() => _CamScreenState();
}

class _CamScreenState extends State<CamScreen> {
  RtcEngine? engine;
  int? uid; // 내 아이디
  int? otherUid; // 상대 아이디

  Future<bool> init() async {
    // 권한 관련 작업
    // 비동기로 뿌려주고 정상적으로 권한을 반환하면 true값 반환
    final resp = await [Permission.camera, Permission.microphone].request();

    final cameraPermission = resp[Permission.camera];
    final microphonePermission = resp[Permission.microphone];

    if (cameraPermission != PermissionStatus.granted ||
        microphonePermission != PermissionStatus.granted) {
      throw '카메라 또는 마이크 권한이 필요합니다.';
    }

    if (engine == null) {
      engine = createAgoraRtcEngine();
      // 엔진 초기화
      await engine!.initialize(
        RtcEngineContext(
          appId: APP_ID,
          channelProfile: ChannelProfileType.channelProfileLiveBroadcasting,
        ),
      );
      engine!.registerEventHandler(
        // 아고라 엔진에서 받을 수 있는 이벤트 값들 등록
        RtcEngineEventHandler(
          onJoinChannelSuccess: (RtcConnection connection, int elapsed) {
            // 채널 접속에 성공했을 때
            print('채널에 입장했습니다. uid : ${connection.localUid}');
            setState(() {
              this.uid = connection.localUid;
            });
          },
          onLeaveChannel: (RtcConnection connection, RtcStats stats) {
            // 채널을 퇴장했을 때
            print('채널 퇴장');
            setState(() {
              uid = null;
            });
          },
          onUserJoined: (RtcConnection connection, int remoteUid, int elapsed) {
            // 다른 사용자가 접속했을 때
            print('상대가 채널에 입장했습니다. uid : $remoteUid');
            setState(() {
              otherUid = remoteUid;
            });
          },
          onUserOffline: (RtcConnection connection, int remoteUid,
              UserOfflineReasonType reason) {
            // 다른 사용자가 채널을 나갔을 때
            print('상대가 채널에서 나갔습니다. uid : $uid');
            setState(() {
              otherUid = null;
            });
          },
        ),
      );
      // 엔진을 이용해 영상 송출 설정
      await engine!.setClientRole(role: ClientRoleType.clientRoleBroadcaster);
      await engine!.enableVideo(); // 동영상 기능 활성화
      await engine!.startPreview(); // 카메라를 이용해 화면 실행
      await engine!.joinChannel(
        // 채널 입장하기
        token: TEMP_TOKEN,
        channelId: CHANNEL_NAME,
        uid: 0,
        options: ChannelMediaOptions(),
      );
    }
    return true;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
            'LIVE',
          style: TextStyle(
            color: Colors.white,
            letterSpacing: 6.0,
            fontWeight: FontWeight.bold,
          ),
        ),
        backgroundColor: Colors.orange,
      ),

      // Future값을 기반으로 위젯 렌더링
      body: FutureBuilder(
        future: init(),
        builder: (BuildContext context, AsyncSnapshot snapShot) {
          if (snapShot.hasError) {
            // Future 실행 후 에러가 있을 때
            return Center(
              child: Text(
                snapShot.error.toString(),
              ),
            );
          }
          if (!snapShot.hasData) {
            //실행 후 아직 데이터가 없을 때
            return Center(
              child: CircularProgressIndicator(),
            );
          }
          return Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Expanded(
                child: Stack(
                  children: [
                    renderMainView(), // 상대방이 찍는 화면
                    Align(
                      // 내가 찍는 화면
                      alignment: Alignment.topLeft, // 왼쪽 위에 위치
                      child: Container(
                        color: Colors.grey,
                        height: 160,
                        width: 120,
                        child: renderSubView(),
                      ),
                    ),
                  ],
                ),
              ),
              Padding(
                padding: EdgeInsets.symmetric(horizontal: 8.0),
                child: ElevatedButton(
                  // 뒤로가기 기능 및 채널 퇴장 기능
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.orange,
                  ),
                  onPressed: () async {
                    if (engine != null) {
                      await engine!.leaveChannel();
                    }
                    Navigator.of(context).pop();
                  },
                  child: Text(
                    '채널 나가기',
                    style: TextStyle(
                      color: Colors.white,
                      letterSpacing: 4.0,
                    ),
                  ),
                ),
              ),
            ],
          );
        },
      ),
    );
  }

  // 자신의 핸드폰이 촬영하는 화면 렌더링
  Widget renderSubView() {
    if (uid != null) {
      // 동영상 화면 위젯 구현
      return AgoraVideoView(
        // VideoViewController로 해당 컨트롤러가 제공하는 동영상 정보를 위젯으로 렌더링
        controller: VideoViewController(
          rtcEngine: engine!,
          canvas: const VideoCanvas(uid: 0),
        ),
      );
    } else {
      // 화면접속이 안됐으면 로딩화면 렌더링
      return CircularProgressIndicator();
    }
  }

  // 상대 화면 렌더링
  Widget renderMainView() {
    if (otherUid != null) {
      return AgoraVideoView(
        // VideoViewController.remote로 상대방 동영상 렌더링
        controller: VideoViewController.remote(
          rtcEngine: engine!,
          canvas: VideoCanvas(uid: otherUid),
          connection: const RtcConnection(channelId: CHANNEL_NAME),
        ),
      );
    } else {
      // 상대가 아직 채널에 들어오지 않았을 때
      return Center(
        child: const Text(
          '다른 사용자가 들어올 때까지 대기해주세요.',
          textAlign: TextAlign.center,
        ),
      );
    }
  }
}
