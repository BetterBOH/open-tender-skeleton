import React from 'react';
import { Image, Text, Button, Icon, QuantitySpinner } from 'components';

const MenuItemLarge = ({ item, updateQuantity, localesContext }) => (
  <div
    className="MenuSectionItemsLarge__item col-12 md:col-4 lg:col-3 md:pr1_5 mb2"
    key={item.name}
  >
    <div className="w100 radius-md overflow-hidden bg-color-gray-light aspect-landscape mb1">
      {item.small_image_url && <Image src={item.small_image_url} isBg={true} />}
    </div>
    <div className="flex flex-wrap justify-between">
      <div>
        <Text size="detail" className="block text-bold mb_25">
          {item.name}
        </Text>
        <Text size="detail" className="block text-bold mb_5 color-gray-dark">
          ${item.price}
        </Text>
      </div>
      <QuantitySpinner
        quantity={item.quantity || 0}
        handleIncrement={quantity => updateQuantity(item.quantity, quantity)}
        handleDecrement={quantity => updateQuantity(item.quantity, quantity)}
      />
    </div>
    <div className="mb1 pr_5">
      <Text size="detail" className="block color-gray-dark">
        {item.description}
      </Text>
    </div>
    <div className="flex items-start">
      <Button
        variant="icon-circle-secondary"
        className="bg-color-gray-light p_5 mr1"
      >
        <Icon icon="Heart" />
      </Button>
      <Button variant="secondary" className="bg-color-gray-light px2">
        <Text
          size="extrasmall"
          className="color-gray-dark uppercase text-bold letter-spacing-sm"
        >
          {localesContext.Language.t('menu.customize')}
        </Text>
      </Button>
    </div>
  </div>
);

export default MenuItemLarge;
