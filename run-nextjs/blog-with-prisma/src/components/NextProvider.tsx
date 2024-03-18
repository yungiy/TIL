'use client'
import { SessionProvider } from 'next-auth/react';
import React, { ReactNode } from 'react';

interface NextProviderProps {
  children: ReactNode;
}

export default function NextProvider({ children }: NextProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
