import 'dart:io';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:v_player/component/coustom_icon_button.dart';
import 'package:video_player/video_player.dart';

// 동영상 위젯 생성
class CustomVideoPlayer extends StatefulWidget {
  //선택한 동영상을 저장할 변수
  //XFile은 이미지, 영상을 선택했을 때 반환하는 타입
  final XFile video;

  const CustomVideoPlayer({
    Key? key,
    required this.video,
  }) : super(key: key);

  @override
  State<CustomVideoPlayer> createState() => _CustomVideoPlayerState();
}

class _CustomVideoPlayerState extends State<CustomVideoPlayer> {
  VideoPlayerController? videoController;

  @override
  void initState() {
    super.initState();
    // 컨트롤러 초기화
    initializeController();
  }

  // 선택한 동영상으로 컨트롤러 초기화
  initializeController() async {
    final videoController = VideoPlayerController.file(File(widget.video.path));

    await videoController.initialize();

    setState(() {
      this.videoController = videoController;
    });
  }

  @override
  Widget build(BuildContext context) {
    if (videoController == null) {
      return Center(
        child: CircularProgressIndicator(),
      );
    }
    return AspectRatio(
      aspectRatio: videoController!.value.aspectRatio,
      // 스택으로 쌓는 위젯을 만듦, 스택은 기본적으로 종속된 위젯을 정중앙에 위치시킴
      child: Stack(
        children: [
          VideoPlayer(videoController!),
          // child 위젯 위치를 포지셔닝함
          Positioned(
            bottom: 0,
            right: 0,
            left: 0,
            // 동영상 재생 슬라이더
            child: Slider(
              // 슬라이더가 이동할 때마다 실행할 함수
              onChanged: (double val) {
                videoController!.seekTo(
                  //seekTo: 동영상의 재생 위치를 특정 위치로 이동
                  Duration(seconds: val.toInt()),
                );
              },
              // 동영상 재생 위치를 초 단위로 표현
              value: videoController!.value.position.inSeconds.toDouble(),
              min: 0, // min은 항상 0 동영상의 시작은 0초부터 시작하기 때문
              // 선택된 동영상의 재생 길이를 초단위로 변환(더블인 이유)
              max: videoController!.value.duration.inSeconds.toDouble(),
            ),
          ),
          Align(
            // 새 동영상 아이콘
            alignment: Alignment.topRight,
            child: CustomIconButton(
              onPressed: () {},
              iconData: Icons.photo_camera_back,
            ),
          ),
          Align(
            // 동영상 재생 아이콘
            alignment: Alignment.topCenter,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                CustomIconButton(
                  // 되감기 버튼
                  onPressed: () {},
                  iconData: Icons.rotate_left,
                ),
                CustomIconButton(
                  // 재생 버튼
                  onPressed: () {},
                  // 삼항 연산자 
                  iconData: videoController!.value.isPlaying
                      ? Icons.pause
                      : Icons.play_arrow,
                ),
                CustomIconButton(
                  // 앞으로 되감기 버튼
                  onPressed: () {},
                  iconData: Icons.rotate_right,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
