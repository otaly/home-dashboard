'use client';

import type { SubscriptionCategory } from '@/app/_types';
import { formatMoney } from '@/utils/format';
import {
  BoltIcon,
  FilmIcon,
  MusicalNoteIcon,
} from '@heroicons/react/24/outline';
import { Badge, Card, Flex, Metric, Text } from '@tremor/react';
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

type SubscriptionProps = {
  serviceName: string;
  price: number;
  category: SubscriptionCategory;
};

export const Subscription = ({
  serviceName,
  price,
  category,
}: SubscriptionProps) => {
  const badge = badgeMap[category];
  return (
    <Card>
      <Flex justifyContent="start" alignItems="stretch" flexDirection="col">
        <Text>{serviceName}</Text>
        <Metric>
          {formatMoney(price)} / <span className="text-[1.65rem]">月</span>
        </Metric>
        <div className="mt-4">
          <Badge icon={badge.icon}>{badge.text}</Badge>
        </div>
      </Flex>
    </Card>
  );
};
