import React from 'react';
import { Image, Text, QuantitySpinner } from 'components';

const MenuSectionItemsSmall = React.memo(({ items }) => {
  return (
    <div className="MenuSectionItemsSmall flex flex-wrap">
      {items.map(item => (
        <div className="MenuSectionItemsSmall__item col-12 md:col-4 lg:col-3 flex items-center mb1 pr2">
          <div className="col-3 radius-sm overflow-hidden aspect-square bg-color-gray-light">
            <Image src={item.small_image_url} isBg={true} />
          </div>
          <div className="col-6 pl1">
            <Text size="detail" className="block text-bold mb_5">
              {item.name}
            </Text>
            <Text
              size="detail"
              className="block text-bold mb_5 color-gray-dark"
            >
              ${item.price}
            </Text>
          </div>
          <div className="col-4">
            <QuantitySpinner />
          </div>
        </div>
      ))}
    </div>
  );
});

export default MenuSectionItemsSmall;
