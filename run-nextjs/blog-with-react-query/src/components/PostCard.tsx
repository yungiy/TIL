import { Tag } from '@prisma/client';
import Link from 'next/link';
import React from 'react';

interface PostCardProps {
  post: { id: string; title: string; content: string; tag: Tag };
}

export default function PostCard({ post }: PostCardProps) {
  const { title, content, tag } = post;
  return (
    <div className='card w-full bg-base-100 shadow-xl border'>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{content}</p>
        <div className='card-actions justify-end'>
          <span className='badge'>{tag.id}</span>
          <Link href='/blog/1' className='hover:underline'>
            더보기..
          </Link>
        </div>
      </div>
    </div>
  );
}
