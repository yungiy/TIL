import 'package:flutter/material.dart';
import 'package:insta/src/component/avatar_widget.dart';
import 'package:insta/src/component/img_data.dart';
import 'package:insta/src/component/post_widget.dart';

class Home extends StatelessWidget {
  const Home({Key? key}) : super(key: key);

  Widget _popList() {
    return Column(
      children: List.generate(50, (index) => const PostWidget()),
    );
  }

  Widget _myStory() {
    return Stack(
      children: [
        AvatarWidget(
          type: AvatarType.TYPE2,
          thumbPath:
              'https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_1280.jpg',
          size: 70,
        ),
        Positioned(
          right: 0,
          bottom: 0,
          child: Container(
            width: 25,
            height: 25,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: Colors.blue,
              border: Border.all(color: Colors.white, width: 2),
            ),
            child: const Center(
              child: Text(
                '+',
                style: TextStyle(fontSize: 20, color: Colors.white, height: 1),
              ),
            ),
          ),
        ),
      ],
    );
  }

  Widget _storyBoardList() {
    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: Row(children: [
        const SizedBox(width: 20),
        _myStory(),
        const SizedBox(width: 5),
        ...List.generate(
          100,
          (index) => AvatarWidget(
              type: AvatarType.TYPE1,
              thumbPath:
                  'https://cdn.pixabay.com/photo/2024/01/12/21/23/cortina-dampezzo-8504755_1280.jpg'),
        ),
      ]),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 1,
        title: ImageData(IconsPath.logo, width: 270),
        actions: [
          GestureDetector(
            onTap: () {},
            child: Padding(
              padding: const EdgeInsets.all(15.0),
              child: ImageData(IconsPath.directMessage, width: 50),
            ),
          ),
        ],
      ),
      body: ListView(children: [
        _storyBoardList(),
        _popList(),
      ]),
    );
  }
}
