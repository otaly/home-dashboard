'use client';

import {
  Cog8ToothIcon,
  Squares2X2Icon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { Icon } from '@tremor/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ElementType } from 'react';

type NavigationItemVariant = 'dashboard' | 'users' | 'settings';

type NavigationItemPropsObjectsType = {
  [key in NavigationItemVariant]: {
    text: string;
    href: string;
    icon: ElementType;
  };
};

const navigationItemPropsObjects: NavigationItemPropsObjectsType = {
  dashboard: { text: 'Dashboard', href: '/', icon: Squares2X2Icon },
  users: { text: 'Users', href: '/users', icon: UsersIcon },
  settings: { text: 'Settings', href: '/settings', icon: Cog8ToothIcon },
};

type NavigationItemProps = {
  variant: NavigationItemVariant;
};

export const NavigationItem = ({ variant }: NavigationItemProps) => {
  const pathname = usePathname();

  const props = navigationItemPropsObjects[variant];
  const isCurrent = pathname === props.href;
  const colorStyle = isCurrent
    ? 'text-white'
    : 'text-slate-400 hover:text-slate-300 group-hover:text-slate-300 duration-100';

  return (
    <Link
      className={`group flex items-center py-1 ${colorStyle}`}
      href={props.href}
    >
      <Icon icon={props.icon} className={colorStyle} />
      <span>{props.text}</span>
    </Link>
  );
};
