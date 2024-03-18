import prisma from '@/lib/db';
import Link from 'next/link';

export default async function Blog() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      author: true,
    },
  });

  console.log(posts);

  return (
    <div className='max-w-6xl mx-auto py-8'>
      <h1 className='text-3xl font-bold mb-4'>블로그 모아보기</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blogs/${post.id}`}
            className='p-4 rounded-md shadow-md'
          >
            <h2 className='text-xl font-bold w-full'>{post.title}</h2>
            <p className='text-gray-500'>작성자: {post.author?.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
