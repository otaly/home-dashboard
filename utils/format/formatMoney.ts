export const formatMoney = (number: number) => {
  return Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' })
    .format(number)
    .toString();
};
