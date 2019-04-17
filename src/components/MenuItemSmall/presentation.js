import React from 'react';
import cx from 'classnames';
import get from 'utils/get';
import { Text, Image, Icon, QuantitySpinner } from 'components';

const MenuItemSmall = React.memo(
  ({
    item,
    updateQuantity,
    allergenWarnings,
    localesContext,
    brandContext
  }) => {
    const itemHasAllergenWarnings = !!allergenWarnings.length;

    return (
      <div
        className="MenuItemSmall col-12 md:col-4 lg:col-3 flex items-center mb1 pr2"
        key={item.name}
      >
        <div className="col-3 radius-sm overflow-hidden aspect-square bg-color-gray-light">
          {item.small_image_url && (
            <Image
              className={cx({ 'Image--blurred': itemHasAllergenWarnings })}
              src={item.small_image_url}
              isBg={true}
            />
          )}
          {itemHasAllergenWarnings && (
            <div className="flex justify-center items-center">
              <span className="bg-color-brand-color-light radius-xl px1 py_5">
                <Icon
                  className="AllergenWarning__icon"
                  icon="Error"
                  fill={get(brandContext, 'colors.white')}
                />
              </span>
            </div>
          )}
        </div>
        <div className="col-6 pl1">
          <Text size="detail" className="block text-bold">
            {item.name}
          </Text>
          <Text size="detail" className="block text-bold color-gray-dark">
            ${item.price}
          </Text>
          {itemHasAllergenWarnings && (
            <Text
              className="text-extrabold color-brand-color-light"
              size="detail"
            >
              {`${localesContext.Language.t(
                'menu.allergen.contains'
              )} ${allergenWarnings.join(', ')}`}
            </Text>
          )}
        </div>
        <div className="col-4">
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

export default MenuItemSmall;
