import React from 'react';
import { Image, Text, Button, Card } from 'components';

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
      <Card className="MenuItemBuilder__inner relative z2">
        <div className="MenuItemBuilder__header">
          <div className="MenuItemBuilder__header__image mb2">
            <Image
              src={productData.small_image_url}
              alt={productData.name}
              isBg={true}
            />
          </div>
          <div className="px2">
            <Text size="headline" className="block mb1">
              {productData.name}
            </Text>
            <Text size="detail" className="block color-gray">
              {productData.description}
            </Text>
          </div>
        </div>
      </Card>
    </div>
  );
});

export default MenuItemBuilder;
