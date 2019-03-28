import React from 'react';
import currency from 'currency.js';
import get from 'utils/get';
import { Text, RadioSelectButton } from 'components';

const MenuItemSizeSelection = React.memo(props => {
  const { items, selected, handleSelect, localesContext } = props;
  const { Language } = localesContext;

  const createButtonChildren = item => (
    <div className="RadioSelectButton__inner flex items-center">
      {get(item, 'size') && (
        <div className="RadioSelectButton__bubble color-black radius-lg text-bold flex justify-center items-center col-1 mr1">
          <Text size="small" className="uppercase">
            {item.size.charAt(0)}
          </Text>
        </div>
      )}
      <div className="RadioSelectButton__text color-gray-dark">
        <div className="RadioSelectButton__labels flex color-black uppercase letter-spacing-xs">
          <Text size="label-detail" className="text-bold mr1">
            {currency(item.price, {
              formatWithSymbol: true
            }).format()}
          </Text>
          <Text size="label-detail">{`${item.calories} cal`}</Text>
        </div>
        {get(item, 'size') && (
          <Text size="description" className="capitalize">
            {item.size}
          </Text>
        )}
      </div>
    </div>
  );

  return (
    <div className="MenuItemSizeSelection m1">
      <Text size="cta">{Language.t('menu.lineItemEditor.selectSize')}</Text>
      <div className="MenuItemSizeSelection__options my2">
        {items.map((item, index) => (
          <RadioSelectButton
            variant="standalone"
            key={get(item, 'id', index)}
            id={get(item, 'id', index)}
            name={get(item, 'size')}
            children={createButtonChildren(item)}
            isSelected={get(selected, 'id') === get(item, 'id')}
            onClick={() => handleSelect(item)}
          />
        ))}
      </div>
    </div>
  );
});

export default MenuItemSizeSelection;
