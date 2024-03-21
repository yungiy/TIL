import PostCard from '@/components/PostCard';
import { db } from '@/lib/db';

async function getPosts() {
  const response = await db.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return response;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className='grid items-center gap-4 mt-5'>
      {/* {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))} */}
    </main>
  );
}
