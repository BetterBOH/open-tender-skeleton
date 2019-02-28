import React from 'react';
import { Text, Image, QuantitySpinner } from 'components';

const MenuSection = React.memo(({ menuSection }) => {
  const { name, description, items } = menuSection;

  return (
    <div className="MenuSection mb3">
      <div className="MenuSection__header mb2 col-12 md:col-6 lg:col-4">
        <Text size="headline" className="block mb_5">
          {name}
        </Text>
        <Text size="body" className="block color-gray-dark">
          {description}
        </Text>
      </div>
      <div className="MenuSection__items flex flex-wrap">
        {items.map(item => (
          <div className="MenuSection__items__item col-6 md:col-4 lg:col-2 pr1 mb2">
            <div className="radius-md overflow-hidden aspect-square bg-color-gray-light">
              <Image src={item.small_image_url} isBg={true} />
            </div>
            <div className="py1">
              <Text size="detail" className="block text-bold mb_5">
                {item.name}
              </Text>
              <Text
                size="detail"
                className="block text-bold mb_5 color-gray-dark"
              >
                ${item.price}
              </Text>
              <QuantitySpinner />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default MenuSection;
