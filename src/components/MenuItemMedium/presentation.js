import React from 'react';
import cx from 'classnames';
import { Text, Image, Icon, QuantitySpinner } from 'components';

const MenuItemMedium = React.memo(
  ({ item, updateQuantity, allergenWarnings, localesContext }) => {
    const itemHasAllergenWarnings = !!allergenWarnings.length;

    return (
      <div
        className="MenuItemMedium col-6 md:col-4 lg:col-2 pr1 mb2"
        key={item.name}
      >
        <div className="radius-md overflow-hidden aspect-square bg-color-gray-light">
          {item.small_image_url && (
            <Image
              className={cx({ 'Image--blurred': itemHasAllergenWarnings })}
              src={item.small_image_url}
              isBg={true}
            />
          )}
          {itemHasAllergenWarnings && (
            <div className="flex justify-center items-center">
              <Text
                className="bg-color-brand-color-light flex items-center radius-xl text-extrabold letter-spacing-sm color-white uppercase px1 py_5 md:px_5 md:py_25"
                size="detail"
              >
                <Icon
                  className="AllergenWarning__icon mr_5"
                  icon="Error"
                  fill="white"
                />
                {`${localesContext.Language.t(
                  'menu.allergen.contains'
                )} ${allergenWarnings.join(', ')}`}
              </Text>
            </div>
          )}
        </div>
        <div className="py1">
          <Text size="detail" className="block text-bold">
            {item.name}
          </Text>
          <Text size="detail" className="block text-bold mb_5 color-gray-dark">
            ${item.price}
          </Text>
          <QuantitySpinner
            quantity={item.quantity || 0}
            handleIncrement={quantity =>
              updateQuantity(item.quantity, quantity)
            }
            handleDecrement={quantity =>
              updateQuantity(item.quantity, quantity)
            }
          />
        </div>
      </div>
    );
  }
);

export default MenuItemMedium;
