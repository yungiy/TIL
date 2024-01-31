import { atom } from "recoil";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc,  collection, query, where, getDocs } from "firebase/firestore";

interface User {
  username: string;
  email: string;
  token?: string;
  password: string;
}

export const userState = atom<User>({
  key: "user",
  default: { username: "", email: "", password: "", token: "" },
});

export const isSignInState = atom<boolean>({
  key: "isSignIn",
  default: localStorage.getItem("token") ? true : false,
});

export const signUp = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  try {
    const auth = getAuth();
    const { user } = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    const firestore = getFirestore();
    const userDocRef = doc(firestore, "users", user.uid);

    // 사용자 정보를 Firestore에 저장
    await setDoc(userDocRef, {
      username: data.username,
      email: data.email,
      password: data.password,
    });

    // 토큰을 로컬 스토리지에 저장
    localStorage.setItem("token", user.uid);

    return { ...data, token: user.uid };
  } catch (error) {
    console.error("회원가입 실패:", error);
    throw error;
  }
};

export const signIn = async (data: { email: string; password: string }) => {
  try {
    const auth = getAuth();
    const { user } = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    // Firestore에서 추가적인 사용자 정보를 가져옴
    const firestore = getFirestore();
    const usersCollection = collection(firestore, "users");
    const userQuery = query(
      usersCollection,
      where("email", "==", data.email)
    );
    const userSnapshot = await getDocs(userQuery);

    if (userSnapshot.docs.length > 0) {
      const userData = userSnapshot.docs[0].data() as User;
      localStorage.setItem("token", user.uid);
      return { ...userData, token: user.uid };
    } else {
      console.error("일치하는 사용자 정보를 찾을 수 없습니다.");
      throw new Error("일치하는 사용자 정보를 찾을 수 없습니다.");
    }
  } catch (error) {
    console.error("로그인 실패:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    // 로컬 스토리지에서 토큰 제거
    localStorage.removeItem("token");
  } catch (error) {
    console.error("로그아웃 중에 오류가 발생했습니다.:", error);
  }
};
