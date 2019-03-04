import React from 'react';
import { Text, Image, QuantitySpinner } from 'components';

const MenuItemMedium = React.memo(props => {
  const { item, quantity, updateQuantity } = props;

  return (
    <div
      className="MenuSection__items__item col-6 md:col-4 lg:col-2 pr1 mb2"
      key={item.name}
    >
      <div className="radius-md overflow-hidden aspect-square bg-color-gray-light">
        <Image src={item.small_image_url} isBg={true} />
      </div>
      <div className="py1">
        <Text size="detail" className="block text-bold mb_5">
          {item.name}
        </Text>
        <Text size="detail" className="block text-bold mb_5 color-gray-dark">
          ${item.price}
        </Text>
        <QuantitySpinner
          quantity={quantity || 0}
          handleIncrement={updateQuantity}
          handleDecrement={updateQuantity}
        />
      </div>
    </div>
  );
});

export default MenuItemMedium;
