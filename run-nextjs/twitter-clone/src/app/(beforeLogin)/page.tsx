import Main from "@/app/(beforeLogin)/_components/Main";
import {auth} from "@/auth";
import {redirect} from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (session?.user) {
    redirect('/home');
    return null;
  }
  return (
    <Main />
  )
}
