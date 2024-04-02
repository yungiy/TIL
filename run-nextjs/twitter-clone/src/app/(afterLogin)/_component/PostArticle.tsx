'use client';

import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';
import style from './post.module.css';

type Props = {
  children: ReactNode;
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: any[];
  };
};

export default function PostArticle({ children, post }: Props) {
  const router = useRouter();
  const onClick = () => {
    // 상세페이지 주소 이동
    router.push(`/${post.User.id}/status/${post.postId}`);
  };

  return (
    // 온클릭 캡처링으로 분리할 수 있음
    <article onClickCapture={onClick} className={style.post}>
      {children}
    </article>
  );
}
