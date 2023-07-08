import type { SubscriptionCategory } from '@/app/_types';
import { formatMoney } from '@/utils/format';
import { Card, Flex, Metric, Text } from '@tremor/react';
import { SubscriptionBadge } from './SubscriptionBadge';

type SubscriptionProps = {
  serviceName: string;
  price: number;
  category: SubscriptionCategory;
};

export const Subscription = ({
  serviceName,
  price,
  category,
}: SubscriptionProps) => (
  <Card>
    <Flex justifyContent="start" alignItems="stretch" flexDirection="col">
      <Text>{serviceName}</Text>
      <Metric>
        {formatMoney(price)} / <span className="text-[1.65rem]">月</span>
      </Metric>
      <div className="mt-4">
        <SubscriptionBadge category={category} />
      </div>
    </Flex>
  </Card>
);
