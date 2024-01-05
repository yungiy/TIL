import 'package:flutter/material.dart';

class MainAppBar extends StatelessWidget {
  final VoidCallback onPickImage; // 선택
  final VoidCallback onSaveImage; // 저장
  final VoidCallback onDeleteItem; // 삭제

  const MainAppBar({
    Key? key,
    required this.onPickImage,
    required this.onSaveImage,
    required this.onDeleteItem,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 100,
      decoration: BoxDecoration(
        color: Colors.white70.withOpacity(0.9),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          IconButton(
            onPressed: onPickImage,
            icon: Icon(
              Icons.image_search_outlined,
              color: Colors.grey[800],
            ),
          ),
          IconButton(
            onPressed: onDeleteItem,
            icon: Icon(
              Icons.delete_forever_outlined,
              color: Colors.grey[800],
            ),
          ),
          IconButton(
            onPressed: onSaveImage,
            icon: Icon(
              Icons.save,
              color: Colors.grey[800],
            ),
          ),
        ],
      ),
    );
  }
}
