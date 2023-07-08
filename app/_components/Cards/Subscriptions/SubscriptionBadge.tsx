'use client';

import { SubscriptionCategory } from '@/app/_types';
import {
  BoltIcon,
  FilmIcon,
  MusicalNoteIcon,
} from '@heroicons/react/24/outline';
import { Badge } from '@tremor/react';
import { ElementType } from 'react';

type BadgeMapping = {
  [key in SubscriptionCategory]: { icon: ElementType; text: string };
};

const badgeMap: BadgeMapping = {
  video: {
    icon: FilmIcon,
    text: 'video',
  },
  music: {
    icon: MusicalNoteIcon,
    text: 'music',
  },
  tool: {
    icon: BoltIcon,
    text: 'tool',
  },
};

type SubscriptionBadgeProps = {
  category: SubscriptionCategory;
};

export const SubscriptionBadge = ({ category }: SubscriptionBadgeProps) => {
  const badge = badgeMap[category];
  return <Badge icon={badge.icon}>{badge.text}</Badge>;
};
