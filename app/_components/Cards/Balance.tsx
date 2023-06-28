'use client';

import { formatMoney } from '@/utils/format';
import { BarChart, Card, Flex, Metric, Text } from '@tremor/react';

const rawData = [
  {
    month: '2023/1',
    amount: 782000,
  },
  {
    month: '2023/2',
    amount: 782000,
  },
  {
    month: '2023/3',
    amount: 976000,
  },
  {
    month: '2023/4',
    amount: 1445000,
  },
  {
    month: '2023/5',
    amount: 1789000,
  },
  {
    month: '2023/6',
    amount: 2089000,
  },
];

const chartData = rawData.map(({ month, amount }) => ({ month, 残高: amount }));

const Chart = () => (
  <BarChart
    className="max-h-64"
    data={chartData}
    index="month"
    categories={['残高']}
    colors={['blue']}
    valueFormatter={formatMoney}
    yAxisWidth={76}
    showLegend={false}
  />
);

export const Balance = () => {
  const current = chartData.slice(-1)[0].残高;
  const formatted = current == null ? '-' : formatMoney(current);
  return (
    <Card>
      <Flex justifyContent="start" alignItems="stretch" flexDirection="col">
        <Text>残高</Text>
        <Metric>{formatted}</Metric>
        <div className="mt-4 max-h-64">
          <Chart />
        </div>
      </Flex>
    </Card>
  );
};
