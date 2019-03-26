import React from 'react';
import get from 'utils/get';
import { Text, RadioSelectButton } from 'components';

const MenuItemSizeSelection = React.memo(props => {
  const { items, selected, handleSelect, localesContext } = props;
  const { Language } = localesContext;

  return (
    <div className="MenuItemSizeSelection m1">
      <Text size="cta">{Language.t('menu.lineItemEditor.selectSize')}</Text>
      <div className="MenuItemSizeSelection__options my2">
        {items.map((item, index) => {
          const itemSelectionId = get(item, 'id', index);

          return (
            <RadioSelectButton
              key={itemSelectionId}
              id={itemSelectionId}
              // TODO: decipher menu item size? -- currently not in MenuItemModel
              // 'regular' is temporary fallback
              text={get(item, 'size', 'regular')}
              labelBold={get(item, 'price')}
              labelRegular={get(item, 'calories')}
              isSelected={get(selected, 'id') === itemSelectionId}
              onClick={() => handleSelect(item)}
            />
          );
        })}
      </div>
    </div>
  );
});

export default MenuItemSizeSelection;
