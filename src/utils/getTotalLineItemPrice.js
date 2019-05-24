import get from 'utils/get';

export default lineItem => {
  console.log(lineItem);
  const basePrice = parseFloat(get(lineItem, 'productData.price'));

  const optionGroupsPrice = get(lineItem, 'optionGroupMappings', []).reduce(
    (totalEffect, optionGroup) => {
      return (totalEffect += parseFloat(
        get(optionGroup, 'totalEffectOnPrice')
      ));
    },
    0
  );

  return basePrice + optionGroupsPrice;
};
