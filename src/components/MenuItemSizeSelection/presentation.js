import React from 'react';
import currency from 'currency.js';
import get from 'utils/get';
import { Text, RadioSelectButton } from 'components';

const MenuItemSizeSelection = React.memo(props => {
  const {
    menuItemSizeOptionGroup,
    selected,
    handleSelect,
    localesContext
  } = props;
  const { Language } = localesContext;

  const createButtonChildren = optionItem => (
    <div className="MenuItemSizeSelection__button flex items-center">
      {!!get(optionItem, 'name') && (
        <div className="MenuItemSizeSelection__button-bubble color-black radius-lg text-bold flex justify-center items-center col-1 mr1">
          <Text size="small" className="uppercase">
            {optionItem.name.charAt(0)}
          </Text>
        </div>
      )}
      <div className="MenuItemSizeSelection__button-text color-gray-dark">
        <div className="MenuItemSizeSelection__button-labels flex color-black uppercase letter-spacing-xs">
          {!!get(optionItem, 'price') && (
            <Text size="label-detail" className="text-bold mr1">
              {currency(optionItem.price, {
                formatWithSymbol: true
              }).format()}
            </Text>
          )}
          {!!get(optionItem, 'calories') && (
            <Text size="label-detail">{`${optionItem.calories} ${Language.t(
              'menu.cal'
            )}`}</Text>
          )}
        </div>
        {!!get(optionItem, 'name') && (
          <Text size="description" className="capitalize">
            {optionItem.name}
          </Text>
        )}
      </div>
    </div>
  );

  return (
    <div className="MenuItemSizeSelection m1">
      <Text size="cta">{Language.t('menu.lineItemEditor.selectSize')}</Text>
      <div className="MenuItemSizeSelection__options my2">
        {menuItemSizeOptionGroup.option_items.map((optionItem, index) => (
          <RadioSelectButton
            variant="standalone"
            key={get(optionItem, 'id', index)}
            id={get(optionItem, 'id', index)}
            name={get(optionItem, 'name')}
            isSelected={get(selected, 'id') === get(optionItem, 'id')}
            onClick={() => handleSelect(optionItem)}
          >
            {createButtonChildren(optionItem)}
          </RadioSelectButton>
        ))}
      </div>
    </div>
  );
});

export default MenuItemSizeSelection;
