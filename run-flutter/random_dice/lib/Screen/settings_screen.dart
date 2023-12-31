import 'package:flutter/material.dart';
import 'package:random_dice/const/colors.dart';

class SettingsScreen extends StatelessWidget {
  final double threshold; // 슬라이더의 현재값
  final ValueChanged<double> onThresholdChange; // 슬라이더가 변경될 때 실행되는 함수

  const SettingsScreen({
    Key? key,
    required this.threshold,
    required this.onThresholdChange,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Padding(
          padding: const EdgeInsets.only(left: 20.0),
          child: Row(
            children: [
              Text(
                '민감도',
                style: TextStyle(
                  color: secondaryColor,
                  fontWeight: FontWeight.w700,
                  fontSize: 20.0,
                ),
              ),
            ],
          ),
        ),
        Slider(
            // 값 변경 시 실행되는 함수
            value: threshold,
            // 슬라이더 선택값
            onChanged: onThresholdChange,
            min: 0.1,
            max: 10.0,
            divisions: 101,
            label: threshold.toStringAsFixed(1) // 표시값
            ),
      ],
    );
  }
}
