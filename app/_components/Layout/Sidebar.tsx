import { Flex } from '@tremor/react';
import { Logo } from '../Elements';
import { NavigationItem } from './NavigationItem';

export const Sidebar = () => (
  <Flex
    className="h-full w-56 bg-gray-900 text-white"
    flexDirection="col"
    justifyContent="start"
    alignItems="stretch"
  >
    <div className="flex justify-center py-6">
      <Logo />
    </div>
    <nav className="flex-1 mt-10 px-4">
      <ul className="flex flex-col gap-1">
        <li>
          <NavigationItem variant="dashboard" />
        </li>
        <li>
          <NavigationItem variant="users" />
        </li>
      </ul>
    </nav>
    <div className="px-4 py-2 border-t border-gray-600">
      <NavigationItem variant="settings" />
    </div>
  </Flex>
);
