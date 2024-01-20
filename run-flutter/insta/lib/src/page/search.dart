import 'package:flutter/material.dart';

class Search extends StatelessWidget {
  const Search({super.key});

  Widget _appbar() {
    return Row(
      children: [
        Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(6),
            color: const Color(0xffefefef),
          ),
          child: const Row(
            children: [
              Icon(Icons.search),
              Text(
                '검색',
                style: TextStyle(
                  fontSize: 15,
                  color: Color(0xff838383),
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: [
            _appbar(),
            //_body(),
          ],
        ),
      ),
    );
  }
}
// 10:46