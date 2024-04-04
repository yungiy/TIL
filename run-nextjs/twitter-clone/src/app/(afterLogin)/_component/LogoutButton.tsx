'use client';

import React from 'react';
import style from './logoutButton.module.css';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();
  const { data: me } = useSession();

  const onLogout = () => {
    signOut({ redirect: false }).then(() => router.replace('/'));
  };

  if (!me?.user) {
    // 내 정보가 없다면
    return null;
  }

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        {/* src={me.user?.image as string} */}
        <img src={me.user?.image!} alt={me.user?.id} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.user?.name}</div>
        <div>@{me.user?.id}</div>
      </div>
    </button>
  );
}
