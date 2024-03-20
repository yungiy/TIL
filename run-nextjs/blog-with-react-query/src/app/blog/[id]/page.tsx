import ActionButton from '@/components/ActionButton';
import React from 'react';

export default function BlogDetailPage() {
  return (
    <div>
      <div className='mb-5'>
        <div className='flex items-center'>
          <h2 className='text-2xl font-bold w-full'>첫번째 포스트</h2>
          <ActionButton />
        </div>
      </div>
      <p className='text-slate-500'>첫번째 포스트의 본문입니다.</p>
    </div>
  );
}
