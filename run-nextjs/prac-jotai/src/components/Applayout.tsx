import type { ReactNode } from 'react';
import { Provider } from 'jotai';

type LayoutProps = {
  children: ReactNode;
};

function AppLayout({ children }: LayoutProps) {
  return <Provider>{children}</Provider>;
}

export default AppLayout;
