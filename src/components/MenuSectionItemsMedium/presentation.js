import React from 'react';
import { Text, Image, QuantitySpinner } from 'components';

const MenuSectionItemsMedium = React.memo(({ items }) => {
  if (!items.length) return null;

  return (
    <div className="MenuSection__items MenuSection__items--medium flex flex-wrap">
      {items.map(item => (
        <div
          className="MenuSection__items__item col-6 md:col-4 lg:col-2 pr1_5 mb2"
          key={item.name}
        >
          <div className="radius-md overflow-hidden aspect-square bg-color-gray-light">
            {item.small_image_url && (
              <Image src={item.small_image_url} isBg={true} />
            )}
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
  );
});

export default MenuSectionItemsMedium;
