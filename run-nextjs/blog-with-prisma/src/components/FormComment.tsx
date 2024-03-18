'use client';

import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react';

interface FormCommentsProps {
  postId: string;
}

export default function FormComment({ postId }: FormCommentsProps) {
  const [comment, setComment] = useState<string>('');
  const router = useRouter();
  const { data } = useSession();

  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = async () => {
    if (comment.trim() != '') {
      try {
        const newComment = await axios.post('/api/comments', {
          postId,
          text: comment,
        });
        if (newComment.status === 200) {
          router.refresh();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className='mt-4'>
      <label
        htmlFor='comment'
        className='block text-gray-700 text-sm font-bold mb-2'
      >
        댓글 달기
      </label>
      <div className='mt-4 flex items-center'>
        <input
          value={comment}
          onChange={handleCommentChange}
          type='text'
          className='flex-grow py-2 px-3 border-gray-300 border rounded-md focus:outline-none'
          name='comment'
        />
        <button
          disabled={!data?.user?.email}
          onClick={handleSubmitComment}
          className='bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded-md disabled:bg-red-400 ml-2'
        >
          확인
        </button>
      </div>
    </div>
  );
}
