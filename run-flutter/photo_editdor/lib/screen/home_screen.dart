import 'package:flutter/material.dart';
import 'package:photo_editdor/component/footer.dart';
import 'package:photo_editdor/component/main_app_bar.dart';
import 'package:image_picker/image_picker.dart';
import 'dart:io';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});
  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen>{
  XFile? image;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        fit: StackFit.expand,
        children: [
          renderBody(),
          Positioned(
            top: 0,
            left: 0,
            right: 0,
            child: MainAppBar(
              onPickImage: onPickImage,
              onDeleteItem: onDeleteImage,
              onSaveImage: onSaveImage,
            ),
          ),
          if(image != null)
            Positioned(
              bottom: 0,
              left: 0,
              right: 0,
              child: Footer(
                onEmoticonTap: onEmoticonTap,
              ),
            ),
        ],
      ),
    );
  }

  Widget renderBody(){
    if(image != null){
      //stack의 크기만큼 차지
      return Positioned.fill(
          child: Image.file(
            File(image!.path),
            fit: BoxFit.cover,
          ),
      );
    } else {
      return Center(
        child: TextButton(
          style: TextButton.styleFrom(
            primary: Colors.grey,
          ),
          onPressed: onPickImage,
          child: Text('이미지 선택하기'),
        ),
      );
    }
  }

  void onEmoticonTap(int index){}

  // 이미지 선택 함수정의
  void onPickImage() async{
    final image = await ImagePicker().pickImage(source: ImageSource.gallery);
    setState(() {
      this.image = image;
    });
  }

  void onDeleteImage(){


  }

  void onSaveImage(){}
}
