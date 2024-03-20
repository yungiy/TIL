import Link from 'next/link';

export default function ActionButton() {
  return (
    <div className='flex flex-row gap-2 mr-4'>
      <Link href='/edit/1' className='btn'>수정</Link>
      <button className='btn btn-error'>삭제</button>
    </div>
  )
}
