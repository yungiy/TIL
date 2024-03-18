'use client';
import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })}
      className='text-white hover:underline font-mono font-semi'
    >
      Logout
    </button>
  );
}
