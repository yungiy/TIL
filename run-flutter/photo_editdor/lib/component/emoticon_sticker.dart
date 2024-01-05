import 'package:flutter/material.dart';

class EmoticonSticker extends StatefulWidget {
  final VoidCallback onTransform;
  final String imgPath;


  const EmoticonSticker({
    Key? key,
    required this.onTransform,
    required this.imgPath,
  }) : super(key: key);

  @override
  State<EmoticonSticker> createState() => _EmoticonStickerState();
}

class _EmoticonStickerState extends State<EmoticonSticker> {
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: (){
        // 스티커 상태가 변경될 때마다 실행
        widget.onTransform();
      },
      onScaleUpdate: (ScaleUpdateDetails details){
        // 스티커 확대비율이 변경됐을 때
        widget.onTransform;
      },
      onScaleEnd: (ScaleEndDetails details){},
      // 확대 비율 변경이 완료되었을 때
      child: Image.asset(
        widget.imgPath,
      ),
    );
  }
}
