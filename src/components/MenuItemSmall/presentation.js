import React from 'react';
import { Text, Image, QuantitySpinner } from 'components';

const MenuItemSmall = ({ item, updateQuantity }) => (
  <div
    className="MenuItemSmall col-12 md:col-4 lg:col-3 flex items-center mb1 pr2"
    key={item.name}
  >
    <div className="col-3 radius-sm overflow-hidden aspect-square bg-color-gray-light">
      {item.small_image_url && <Image src={item.small_image_url} isBg={true} />}
    </div>
    <div className="col-6 pl1">
      <Text size="detail" className="block text-bold mb_5">
        {item.name}
      </Text>
      <Text size="detail" className="block text-bold mb_5 color-gray-dark">
        ${item.price}
      </Text>
    </div>
    <div className="col-4">
      <QuantitySpinner
        quantity={item.quantity || 0}
        handleIncrement={quantity => updateQuantity(item.quantity, quantity)}
        handleDecrement={quantity => updateQuantity(item.quantity, quantity)}
      />
    </div>
  </div>
);

export default MenuItemSmall;
