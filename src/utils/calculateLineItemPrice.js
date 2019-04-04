import currency from 'currency.js';
import get from 'utils/get';

export default lineItem => {
  const basePrice = get(lineItem, 'productData.price', '0.00');
  const quantity = get(lineItem, 'quantity', 0);
  const optionGroupMappings = get(lineItem, 'optionGroupMappings', []);

  if (!optionGroupMappings.length) {
    return currency(basePrice).multiply(quantity);
  }

  const optionsTotalEffectOnPrice = optionGroupMappings.reduce(
    (totalEffectOnPrice, currentOptionGroupMapping) =>
      currency(totalEffectOnPrice).add(
        get(currentOptionGroupMapping, 'totalEffectOnPrice', '0.00')
      ),
    currency('0.00')
  );

  return currency(basePrice)
    .add(optionsTotalEffectOnPrice)
    .multiply(quantity);
};
