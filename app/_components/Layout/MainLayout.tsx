import { Flex } from '@tremor/react';
import { Sidebar } from './Sidebar';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => (
  <Flex justifyContent="start" alignItems="stretch" className="relative">
    <aside className="h-screen sticky top-0">
      <Sidebar />
    </aside>
    <main className="flex-1 bg-tremor-background dark:bg-dark-tremor-background overflow-auto">
      {children}
    </main>
  </Flex>
);
