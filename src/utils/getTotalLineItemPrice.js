import get from 'utils/get';
import currency from 'currency.js';

export default lineItem => {
  const basePrice = currency(get(lineItem, 'productData.price'));

  return get(lineItem, 'optionGroupMappings', [])
    .reduce((totalEffect, optionGroup) => {
      return currency(totalEffect).add(get(optionGroup, 'totalEffectOnPrice'));
    }, basePrice)
    .format();
};
