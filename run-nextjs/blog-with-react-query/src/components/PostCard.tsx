import Link from 'next/link';
import React from 'react';

export default function PostCard() {
  return (
    <div className='card w-full bg-base-100 shadow-xl border'>
      <div className='card-body'>
        <h2 className='card-title'>제목입니다.</h2>
        <p>내용입니다.</p>
        <div className='card-actions justify-end'>
          <Link href='/blog/1' className='hover:underline'>더보기..</Link>
        </div>
      </div>
    </div>
  );
}
