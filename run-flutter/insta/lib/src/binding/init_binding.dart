/* 의존성 관리 */
import 'package:get/get.dart';
import 'package:insta/src/controller/bottom_nav_controller.dart';

class InitBinding extends Bindings {
  @override
  void dependencies() {
    Get.put(BottomNavController(), permanent: true);
  }
}
