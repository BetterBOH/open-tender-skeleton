import React from 'react';
import { Image, Text, Button, Card, LineItemsCard } from 'components';

const MenuItemBuilder = React.memo(({ lineItem, actions }) => {
  console.log(lineItem);
  const { productData, optionGroupMappings } = lineItem;

  if (!productData || !optionGroupMappings) return actions.resetModal();

  return (
    <div className="MenuItemBuilder">
      <Button
        className="fixed col-12 t0 l0 r0 b0 bg-color-black-overlay z1"
        onClick={actions.resetModal}
      />
      <Card className="MenuItemBuilder__inner relative z2 overflow-scroll">
        <div className="bg-color-gray-light">
          <div className="MenuItemBuilder__header bg-color-white radius-sm shadow-sm">
            <div className="MenuItemBuilder__header__image mb2">
              <Image
                src={productData.small_image_url}
                alt={productData.name}
                isBg={true}
              />
            </div>
            <div className="p2">
              <Text size="headline" className="block mb_5">
                {productData.name}
              </Text>
              <Text size="detail" className="block color-gray">
                {productData.description}
              </Text>
            </div>
          </div>
          <div className="MenuItemBuilder__option-groups">
            {optionGroupMappings.map(group => {
              console.log(group);

              return (
                <div className="MenuItemBuilder__option-group my2 px2">
                  <Text size="body" className="block text-semibold mb1">
                    {group.name}
                  </Text>
                  {/**
                   * TO-DO: Adjust LineItemsCard item shape to accept options as well
                   * or create a base component that LineItemsCard and OptionItemsCard
                   * could extend */}
                  <LineItemsCard
                    items={group.optionItems.map(option => ({
                      ...option,
                      productData: option.optionItemData
                    }))}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
});

export default MenuItemBuilder;
