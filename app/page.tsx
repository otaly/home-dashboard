import { Flex } from '@tremor/react';
import { Balance, Expenditure, Subscriptions } from './_components/Cards';

const Page = () => (
  <Flex
    justifyContent="start"
    alignItems="stretch"
    className="px-10 py-8 gap-6 min-h-screen"
  >
    <Flex
      justifyContent="start"
      alignItems="stretch"
      flexDirection="col"
      className="flex-1 gap-6"
    >
      <Balance />
      <Expenditure />
    </Flex>
    <div className="flex-1">
      <Subscriptions />
    </div>
  </Flex>
);

export default Page;
