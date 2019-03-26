import React from 'react';
import { Image, Text, Button, Card, LineItemsCard } from 'components';
import get from 'utils/get';

const LineItemEditor = React.memo(({ item, onClose }) => {
  const { menuItem } = item;
  const optionGroups = get(menuItem, 'option_groups', []);
  const hasOptionGroups = !!optionGroups.length;

  if (!menuItem || !hasOptionGroups) return onClose();

  return (
    <div className="LineItemEditor">
      <Button
        className="fixed col-12 t0 l0 r0 b0 bg-color-black-overlay z1"
        onClick={onClose}
      />
      <Card className="LineItemEditor__inner relative z2 overflow-scroll">
        <div className="bg-color-gray-light">
          <div className="LineItemEditor__header bg-color-white radius-sm shadow-sm">
            <div className="LineItemEditor__header__image mb2">
              <Image
                src={menuItem.small_image_url}
                alt={menuItem.name}
                isBg={true}
              />
            </div>
            <div className="p2">
              <Text size="headline" className="block mb_5">
                {menuItem.name}
              </Text>
              <Text size="detail" className="block color-gray">
                {menuItem.description}
              </Text>
            </div>
          </div>
          <div className="LineItemEditor__option-groups">
            {optionGroups.map(group => (
              <div className="LineItemEditor__option-group my2 px2">
                <Text size="body" className="block text-semibold mb1">
                  {group.name}
                </Text>
                {/**
                 * TO-DO: Adjust LineItemsCard item shape to accept options as well
                 * or create a base component that LineItemsCard and OptionItemsCard
                 * could extend */}
                <LineItemsCard
                  items={group.option_items.map(option => ({
                    ...option,
                    productData: option
                  }))}
                />
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
});

export default LineItemEditor;
