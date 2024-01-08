import 'package:flutter/material.dart';

//유튜브 재생을 위한 패키지
import 'package:youtube_player_flutter/youtube_player_flutter.dart';
import 'package:yun_tube/model/video_model.dart';

class CustomYoutubePlayer extends StatefulWidget {
  final VideoModel videoModel;

  const CustomYoutubePlayer({
    Key? key,
    required this.videoModel,
  }) : super(key: key);

  @override
  State<CustomYoutubePlayer> createState() => _CustomYoutubePlayerState();
}

class _CustomYoutubePlayerState extends State<CustomYoutubePlayer> {
  YoutubePlayerController? controller;

  @override
  void initState() {
    super.initState();

    controller = YoutubePlayerController( // 컨토롤러 선언
      initialVideoId: widget.videoModel.id, // 처음 실행할 동영상의 아이디
      flags: YoutubePlayerFlags(
        autoPlay: false,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        YoutubePlayer( // 동영상 재생기 렌더링
          controller: controller!,
          showVideoProgressIndicator: true,
        ),
        const SizedBox(height: 16.0),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 8.0),
          child: Text(
            widget.videoModel.title, // 동영상 제목
            style: TextStyle(
              color: Colors.black,
              fontSize: 16.0,
              fontWeight: FontWeight.w700,
            ),
          ),
        ),
        const SizedBox(height: 16.0),
      ],
    );
  }

  @override
  void dispose() {
    super.dispose();
    controller!.dispose(); // State 폐기 시 컨트롤러 또한 폐기
  }
}
