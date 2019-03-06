import React from 'react';
import { Text, Image, QuantitySpinner } from 'components';

const MenuItemMedium = React.memo(({ item, updateQuantity }) => (
  <div
    className="MenuItemMedium col-6 md:col-4 lg:col-2 pr1 mb2"
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
        quantity={item.quantity || 0}
        handleIncrement={quantity => updateQuantity(item.quantity, quantity)}
        handleDecrement={quantity => updateQuantity(item.quantity, quantity)}
      />
    </div>
  </div>
));

export default MenuItemMedium;
