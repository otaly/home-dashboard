import { Flex } from '@tremor/react';
import { Sidebar } from './Sidebar';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => (
  <Flex justifyContent="start" alignItems="start" className="relative">
    <aside className="h-screen sticky top-0">
      <Sidebar />
    </aside>
    <main className="flex-1">{children}</main>
  </Flex>
);
