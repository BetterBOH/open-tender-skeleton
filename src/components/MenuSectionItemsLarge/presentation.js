import React from 'react';
import { Image, Text, QuantitySpinner, Button, Icon } from 'components';

const MenuSectionItemsLarge = React.memo(({ items }) => {
  return (
    <div className="MenuSectionItemsLarge flex flex-wrap">
      {items.map(item => (
        <div className="MenuSectionItemsLarge__item col-12 md:col-4 lg:col-3 md:pr1_5 mb2">
          <div className="w100 radius-md overflow-hidden bg-color-gray-light aspect-landscape mb1">
            <Image src={item.small_image_url} isBg={true} />
          </div>
          <div className="flex flex-wrap justify-between">
            <div>
              <Text size="detail" className="block text-bold mb_25">
                {item.name}
              </Text>
              <Text
                size="detail"
                className="block text-bold mb_5 color-gray-dark"
              >
                ${item.price}
              </Text>
            </div>
            <QuantitySpinner />
          </div>
          <div className="mb1 pr_5">
            <Text size="detail" className="block color-gray-dark">
              {item.description}
            </Text>
          </div>
          <div className="flex items-start">
            <Button
              variant="icon-circle-large"
              className="bg-color-gray-light mr1"
            >
              <Icon icon="Heart" />
            </Button>
            <Button variant="secondary" className="bg-color-gray-light px2">
              <Text
                size="extrasmall"
                className="color-gray-dark uppercase text-bold letter-spacing-sm"
              >
                Customize
              </Text>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
});

export default MenuSectionItemsLarge;
