import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <div className='navbar bg-neutral-100'>
      <div className='container'>
        <div className='flex-1'>
          <Link href='/' className='font-bold text-2xl'>
            The Blog
          </Link>
        </div>
        <div className='flex-none'>
          <Link href='/create'className='btn btn-ghost'>포스트 작성</Link>
        </div>
      </div>
    </div>
  );
}
