import { SubscriptionCategory } from '@/app/_types';
import { Flex } from '@tremor/react';
import { Subscription } from './Subscription';

const data = [
  {
    serviceName: 'Netflix',
    price: 1490,
    category: 'video' as SubscriptionCategory,
  },
  {
    serviceName: 'Disney+',
    price: 990,
    category: 'video' as SubscriptionCategory,
  },
  {
    serviceName: 'Hulu',
    price: 1026,
    category: 'video' as SubscriptionCategory,
  },
  {
    serviceName: 'Apple Music',
    price: 1080,
    category: 'music' as SubscriptionCategory,
  },
  {
    serviceName: 'Figma',
    price: 2250,
    category: 'tool' as SubscriptionCategory,
  },
];

export const Subscriptions = () => (
  <Flex
    justifyContent="start"
    alignItems="stretch"
    flexDirection="col"
    className="gap-6"
  >
    {data.map(({ serviceName, price, category }) => (
      <Subscription
        key={serviceName}
        serviceName={serviceName}
        price={price}
        category={category}
      />
    ))}
  </Flex>
);
