import React from 'react';
import { Image, Text, Button, Card, Icon, OptionGroup } from 'components';
import get from 'utils/get';

const LineItemEditor = React.memo(({ item, onClose }) => {
  const { menuItem, lineItem } = item;
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
            <div className="LineItemEditor__header__image mb2 relative">
              <Image
                src={menuItem.small_image_url}
                alt={menuItem.name}
                isBg={true}
              />
              <div className="p1 absolute t0 r0">
                <Button
                  variant="icon-circle-secondary"
                  className="bg-color-white p_25 shadow-sm"
                  onClick={onClose}
                >
                  <Icon icon="Close" />
                </Button>
              </div>
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
            {optionGroups.map(group => {
              const items = group.option_items.map(item => {
                const lineItemOption = lineItem.optionGroupMappings
                  .find(
                    optionGroupMapping => optionGroupMapping.id === group.id
                  )
                  .optionItems.find(
                    optionItem => optionItem.optionId === item.id
                  );

                return {
                  ...item,
                  quantity: lineItemOption.quantity
                };
              });

              const optionGroup = {
                ...group,
                items
              };

              return <OptionGroup optionGroup={optionGroup} />;
            })}
          </div>
        </div>
      </Card>
    </div>
  );
});

export default LineItemEditor;
