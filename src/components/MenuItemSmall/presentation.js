import React from 'react';
import cx from 'classnames';
import get from 'utils/get';
import { Image, Text, Button, Icon, QuantitySpinner } from 'components';

const MenuItemSmall = React.memo(
  ({
    item,
    updateQuantity,
    quantity,
    allergenWarnings,
    localesContext,
    brandContext
  }) => {
    const itemHasAllergenWarnings = !!allergenWarnings.length;

    return (
      <div
        className="MenuItemSmall col-12 md:col-4 lg:col-3 flex items-center mb1 md:pr1_5"
        key={item.name}
      >
        <Button
          className="col-3 radius-sm overflow-hidden aspect-square bg-color-gray-lighter hover-bg-color-gray-light"
          ariaLabel={`${localesContext.Language.t('menu.moreDetailsAbout')} ${
            item.name
          }`}
          onClick={() => updateQuantity(0, item.increment)}
        >
          {item.small_image_url && (
            <Image
              className={cx({ 'Image--blurred': itemHasAllergenWarnings })}
              src={item.small_image_url}
              isBg={true}
            />
          )}
          {itemHasAllergenWarnings && (
            <div className="flex justify-center items-center">
              <span className="bg-color-error radius-xl px1 py_5">
                <Icon
                  className="AllergenWarning__icon"
                  icon="Error"
                  fill={get(brandContext, 'colors.white')}
                />
              </span>
            </div>
          )}
        </Button>
        <div className="col-6 pl1">
          <Text size="detail" className="block text-bold">
            {item.name}
          </Text>
          <Text size="detail" className="block text-bold color-gray-dark">
            ${item.price}
          </Text>
          {itemHasAllergenWarnings && (
            <Text className="text-extra-bold color-error" size="detail">
              {`${localesContext.Language.t(
                'menu.allergen.contains'
              )} ${allergenWarnings.join(', ')}`}
            </Text>
          )}
        </div>
        <div className="col-3 flex justify-end">
          {!!get(item, 'option_groups.length', 0) ? (
            <Button
              variant="secondary"
              className="bg-color-gray-dark hover-bg-color-black flex px1"
              onClick={() => updateQuantity(0, item.increment)}
            >
              <Text
                size="extra-small"
                className="color-white uppercase text-bold letter-spacing-sm"
              >
                {localesContext.Language.t('menu.add')}
              </Text>
            </Button>
          ) : (
            <QuantitySpinner
              quantity={quantity}
              handleIncrement={newQuantity =>
                updateQuantity(quantity, newQuantity)
              }
              handleDecrement={newQuantity =>
                updateQuantity(quantity, newQuantity)
              }
            />
          )}
        </div>
      </div>
    );
  }
);

export default MenuItemSmall;
