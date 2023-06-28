'use client';

import { formatMoney } from '@/utils/format';
import { Card, DonutChart, Flex, Metric, Text } from '@tremor/react';

const data = [
  {
    category: '住居費',
    amount: 98000,
  },
  {
    category: '食費',
    amount: 43209,
  },
  {
    category: '日用品',
    amount: 20098,
  },
  {
    category: '衣服',
    amount: 14400,
  },
  {
    category: 'サブスクリプション',
    amount: 4000,
  },
];

const Chart = () => (
  <DonutChart
    className="h-60"
    data={data}
    category="amount"
    index="category"
    variant="pie"
    valueFormatter={formatMoney}
  />
);

export const Expenditure = () => {
  const total = data.reduce((pre, cur) => pre + cur.amount, 0);
  const formatted = formatMoney(total);
  return (
    <Card>
      <Flex justifyContent="start" alignItems="stretch" flexDirection="col">
        <Text>先月の支出</Text>
        <Metric>{formatted}</Metric>
        <div className="mt-4">
          <Chart />
        </div>
      </Flex>
    </Card>
  );
};
