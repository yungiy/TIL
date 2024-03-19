import prisma from '@/lib/db';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

interface CommentsProps {
  postId: string;
}

export default async function Comments({ postId }: CommentsProps) {
  const comments = await prisma.comment.findMany({
    where: {
      postId,
    },
    include: {
      author: true,
    },
  });

  return (
    <div className='mt-6'>
      <h2 className='text-2xl font-bold mb-2'>댓글</h2>
      {comments.length === 0 ? (
        <div className='text-center font-bold p-5'>작성된 댓글이 없습니다.</div>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className='mb-4 bg-slate-300 p-2 rounded-md'>
              <div className='flex items-center mb-2'>
                <div className='text-blue-500 font-bold mr-2'>
                  {comment.author?.name}
                </div>
                <div className='text-gray-500 mr-2'>
                  {dayjs(comment.createdAt)
                    .locale('ko')
                    .format('YYYY-MM-DD ddd HH:mm:ss')}
                </div>
              </div>
              <p>{comment.text}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
