import 'package:flutter/material.dart';
import 'package:get/get.dart';

class ImageData extends StatelessWidget {
  String icon;
  final double? width;
  ImageData(
    this.icon, {
    Key? key,
    this.width = 80,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Image.asset(
      icon,
      width: width! / Get.mediaQuery.devicePixelRatio,
    );
  }
}

class IconsPath {
  static String get homeOff => 'asset/img/bottom_nav_home_off_icon.jpg';
  static String get homeOn => 'asset/img/bottom_nav_home_on_icon.jpg';
  static String get searchOff => 'asset/img/bottom_nav_search_off_icon.jpg';
  static String get searchOn => 'asset/img/bottom_nav_search_on_icon.jpg';
  static String get uploadIcon => 'asset/img/bottom_nav_upload_icon.jpg';
  static String get activeOff => 'asset/img/bottom_nav_active_off_icon.jpg';
  static String get activeOn => 'asset/img/bottom_nav_active_on_icon.jpg';
  static String get logo => 'asset/img/logo.jpg';
  static String get directMessage => 'asset/img/direct_msg_icon.jpg';
  static String get plusIcon => 'asset/img/plus_icon.png';
  static String get postMoreIcon => 'asset/img/more_icon.jpg';
  static String get likeOffIcon => 'asset/img/like_off_icon.jpg';
  static String get likeOnIcon => 'asset/img/like_on_icon.jpg';
  static String get replyIcon => 'asset/img/reply_icon.jpg';
  static String get bookMarkOffIcon => 'asset/img/book_mark_off_icon.jpg';
  static String get bookMarkOnIcon => 'asset/img/book_mark_on_icon.jpg';
  static String get backBtnIcon => 'asset/img/back_icon.jpg';
  static String get menuIcon => 'asset/img/menu_icon.jpg';
  static String get addFriend => 'asset/img/add_friend_icon.jpg';
  static String get gridViewOff => 'asset/img/grid_view_off_icon.jpg';
  static String get gridViewOn => 'asset/img/grid_view_on_icon.jpg';
  static String get myTagImageOff => 'asset/img/my_tag_image_off_icon.jpg';
  static String get myTagImageOn => 'asset/img/my_tag_image_on_icon.jpg';
  static String get nextImage => 'asset/img/upload_next_icon.jpg';
  static String get closeImage => 'asset/img/close_icon.jpg';
  static String get imageSelectIcon => 'asset/img/image_select_icon.jpg';
  static String get cameraIcon => 'asset/img/camera_icon.jpg';
  static String get uploadComplete => 'asset/img/upload_complete_icon.jpg';
  static String get mypageBottomSheet01 =>
      'asset/img/mypage_bottom_sheet_01.jpg';
  static String get mypageBottomSheet02 =>
      'asset/img/mypage_bottom_sheet_02.jpg';
  static String get mypageBottomSheet03 =>
      'asset/img/mypage_bottom_sheet_03.jpg';
  static String get mypageBottomSheet04 =>
      'asset/img/mypage_bottom_sheet_04.jpg';
  static String get mypageBottomSheet05 =>
      'asset/img/mypage_bottom_sheet_05.jpg';
  static String get mypageBottomSheetSetting01 =>
      'asset/img/mypage_bottom_sheet_setting_01.jpg';
  static String get mypageBottomSheetSetting02 =>
      'asset/img/mypage_bottom_sheet_setting_02.jpg';
  static String get mypageBottomSheetSetting03 =>
      'asset/img/mypage_bottom_sheet_setting_03.jpg';
  static String get mypageBottomSheetSetting04 =>
      'asset/img/mypage_bottom_sheet_setting_04.jpg';
  static String get mypageBottomSheetSetting05 =>
      'asset/img/mypage_bottom_sheet_setting_05.jpg';
  static String get mypageBottomSheetSetting06 =>
      'asset/img/mypage_bottom_sheet_setting_06.jpg';
  static String get mypageBottomSheetSetting07 =>
      'asset/img/mypage_bottom_sheet_setting_07.jpg';
}
