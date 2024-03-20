import PostCard from '@/components/PostCard';
import Image from "next/image";

export default function Home() {
  return (
   <main className='grid items-center gap-4 mt-5'>
    <PostCard />
    <PostCard />
    <PostCard />
   </main>
  );
}
