import Comments from '@/components/Comments';
import FormComment from '@/components/FormComment';
import prisma from '@/lib/db';
import React from 'react';

// 다이나믹 라우터의 blogs/[id]
interface BlogDetailProps {
  params: {
    id: string;
  };
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  
  const post = await prisma.post.findFirst({
    where: {
      id: params.id,
    },
    include: {
      author: true,
    },
  });

  return (
    <div className='max-w-6xl mx-auto py-5'>
      <div className='bg-slate-300 rounded-md p-2'>
        <div className='flex'>
          <h1 className='text-3xl font-bold w-full'>{post?.title}</h1>
        </div>
        <p className='text-blue-500 font-bold'>{post?.author?.name}</p>
        <div className='mt-2 text-gray-700'>{post?.content}</div>
      </div>
      <Comments postId={params.id} />
      <FormComment postId={params.id} />
    </div>
  );
}
